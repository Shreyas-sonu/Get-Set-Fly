import React,{useState,useContext} from "react";
import Style from "./profile.module.css";
import { storage } from "../../apis/firebase";
import { updateProfile } from "firebase/auth";
import { ref as photoRef, getDownloadURL,uploadBytesResumable } from "firebase/storage";
import { AuthContextApi } from "../../apis/AuthContextApi";
import { toast } from 'react-toastify';

const UploadPhoto = () => {
    let { authuser } = useContext(AuthContextApi);
    let [photo, setPhoto] = useState("");
    let [photoView, setPhotoView] = useState(null);
    let [isLoading, setIsLoading] = useState(false)
    let [progressBar, setProgressBar] = useState(0);
    let [status,setStatus]=useState(false)
    let handleChange = e => {
        let data = e.target.files[0];
        let reader = new FileReader();
        reader.readAsDataURL(data);
        reader.onloadend = function (e) {
            setPhotoView(e.target.result)
        }
        setPhoto(data)
    }
    let handleSubmit=async e=> {
        e.preventDefault();
        try {
            let storageLocation = photoRef(storage, "profile-photo" + photo.name);
            let uploadPicTask = uploadBytesResumable(storageLocation, photo);
            uploadPicTask.on("state_changed", (snapShot) => {
                let progressBarData = (snapShot.bytesTransferred / snapShot.totalBytes) * 100;
                setProgressBar(progressBarData);
                setStatus(true)
                setPhotoView(null)
                setIsLoading(true)
                //Progress Bar
            }, (err) => {
                toast.error(err.code);
                //Error Handling
            }, async() => {
                //Task Completion
                let downLoadUrl = await getDownloadURL(storageLocation);
                updateProfile(authuser, { photoURL: downLoadUrl });
                setIsLoading(false);
                setStatus(false);
                toast.success("Profile Updated Successfully")
                window.location.assign("/profile")
            })

            } catch (error) {
            toast.error(error.code);
        }
    }
    let ProgressUi = () => {
        return (
            <div className={Style.progress}>
                <p className="bar" style={{ width: `${progressBar}%` }}>
                    {progressBar}%
                </p>
            </div>
        )
    }
    return (
      <>
        <h1>Upload Profile Photo</h1>
            <article>
                {status===true?<ProgressUi/>:""}
          <figure style={{ textAlign: "center" }}>
            {photoView == null ? ("") : (
              <img src={photoView} alt="" width="120px" height="120px"/>
            )}
          </figure>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="">Upload Photo</label>
              <input
                type="file"
                placeholder="Upload Your Photo"
                name="pPhoto"
                id="pPhoto"
                onChange={handleChange}
              />
            </div>
            <div>
              <button>Upload</button>
            </div>
          </form>
        </article>
      </>
    );
};

export default UploadPhoto;
