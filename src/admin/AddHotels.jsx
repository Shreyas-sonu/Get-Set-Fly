import React, { useState } from "react";
import Style from "./_admin.module.css";
import { BiHotel } from "react-icons/bi";
import {
  ref as photoRef,
  getDownloadURL,
  uploadBytesResumable,
} from "firebase/storage";
import { storage } from "../apis/firebase";
import { toast } from "react-toastify";
import { collection, addDoc } from 'firebase/firestore';
import { dataBase } from "../apis/firebase";


const AddHotels = () => {
  let [state, setState] = useState({
    hotelName: "",
    city: "",
    price: "",
    address: "",
    rating: "",
    type: "",
    availability: "",
  });
  let [hotelImg, setHotelImg] = useState("");
  let [amenities, setAminities] = useState([]);
  let [photo, setPhoto] = useState("");
  let [photoView, setPhotoView] = useState(null);
  let [isLoading, setIsLoading] = useState(false);
  let [progressBar, setProgressBar] = useState(0);
  let [status, setStatus] = useState(false);
  let { hotelName, city, price, address, rating, type, availability } = state;
  let handleTextChange = e => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  let handleCheck = e => {
    let { value } = e.target;
    setAminities(old => {
      return [...old, value];
    });
  };
  let handleFileChange = e => {
    let data = e.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(data);
    reader.onloadend = function (e) {
      setPhotoView(e.target.result);
    };
    setHotelImg(data);
  };
  let handleSubmit =async e => {
    e.preventDefault();
            try {
              let storageLocation = photoRef(
                storage,
                "hotels-photo" + hotelImg.name
              );
              let uploadPicTask = uploadBytesResumable(storageLocation, hotelImg);
              uploadPicTask.on(
                "state_changed",
                snapShot => {
                  let progressBarData =
                  Math.round(snapShot.bytesTransferred / snapShot.totalBytes) * 100;
                  setProgressBar(progressBarData);
                  setStatus(true);
                  setPhotoView(null);
                  setIsLoading(true);
                  //Progress Bar
                },
                err => {
                  toast.error(err.code);
                  //Error Handling
                },
                async () => {
                  //Task Completion
                  let downLoadUrl = await getDownloadURL(storageLocation);
                  let payload = { ...state, downLoadUrl, amenities };
                  let collectionRef = collection(dataBase, "Hotels");
                  await addDoc(collectionRef,payload)
                  setIsLoading(false);
                  setStatus(false);
                  toast.success("Hotel Added Successfully");
                  window.location.assign("/admin");
                }
              );
            } catch (error) {
              toast.error(error.code);
            }

  };
  let ProgressUi = () => {
    return (
      <div className={Style.progress}>
        <p className="bar" style={{ width: `${progressBar}%`,backgroundColor:"yellowgreen" }}>
          {progressBar}% .....
        </p>
      </div>
    );
  };
  return (
    <section id={Style.addHotelsBlock}>
      <article>
        <aside className={Style.authRight}>
          <h1>
            <BiHotel />
            Add Hotels
          </h1>
          <p>{status === true ? <ProgressUi />: ""}</p>
          <figure>
            {photoView === null ? "" : <img src={photoView} alt="" />}
            {photoView === null ? (
              ""
            ) : (
              <figcaption style={{ color: "white" }}>Preview</figcaption>
            )}
          </figure>
        </aside>
        <aside className={Style.authLeft}>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="hotelName">Hotel Name</label>
              <input
                type="text"
                id="hotelName"
                name="hotelName"
                value={hotelName}
                required
                onChange={handleTextChange}
              />
            </div>
            <div>
              <label htmlFor="city">City</label>
              <input
                type="text"
                id="city"
                name="city"
                value={city}
                onChange={handleTextChange}
                required
              />
            </div>
            <div>
              <label htmlFor="price">Price</label>
              <input
                type="text"
                id="price"
                name="price"
                value={price}
                onChange={handleTextChange}
                required
              />
            </div>
            <div>
              <label htmlFor="rating">Rating</label>
              <input
                type="text"
                id="rating"
                name="rating"
                value={rating}
                onChange={handleTextChange}
                required
              />
            </div>
            <div
              value={availability}
              className={Style.radioAvl}
              onChange={handleTextChange}
              required
            >
              <label htmlFor="availability">Availability</label>
              <input
                type="radio"
                id="available"
                name="availability"
                value="available"
              />
              <small> Available</small>&nbsp;
              <input
                type="radio"
                id="unavailable"
                value="unavailable"
                name="availability"
              />
              <small> Unavailable</small>
            </div>
            <div
              className={Style.chkType}
              value={amenities}
              onChange={handleCheck}
              required
            >
              <label htmlFor="amenities">Facilities</label>
              <input type="checkbox" id="ac" name="amenities" value="ac" />
              &nbsp;
              <small> A/C</small>&nbsp;&nbsp;
              <input type="checkbox" id="tv" name="amenities" value="tv" />
              &nbsp;
              <small> TV</small>&nbsp;&nbsp;
              <input type="checkbox" id="pool" name="amenities" value="pool" />
              &nbsp;
              <small> Swimming Pool</small>&nbsp;&nbsp;
              <br />
              <input
                type="checkbox"
                id="breakfast"
                name="amenities"
                value="breakfast"
              />
              &nbsp;
              <small> Complimentary-Breakfast</small>&nbsp;&nbsp;
              <input type="checkbox" id="price" name="amenities" value="wifi" />
              &nbsp;
              <small> WI-FI</small>
            </div>
            <div>
              <label htmlFor="address">Address</label>
              <textarea
                type="text"
                id="address"
                name="address"
                value={address}
                onChange={handleTextChange}
              />
            </div>
            <div>
              <label htmlFor="type">Select Type of Hotel</label>
              <select
                name="type"
                id="type"
                onChange={handleTextChange}
                value={type}
              >
                <option value=""> </option>
                <option value="Deluxe_Double_or_Twin_Room">
                  Deluxe Double or Twin Room
                </option>
                <option value="King_Room_with_Balcony">
                  King Room with Balcony
                </option>
                <option value="Family_Bedroom">Family Bedroom</option>
                <option value="Normal_Single_Room">Normal Single Room</option>
              </select>
            </div>
            <div>
              <label htmlFor="hotelImg">Upload Image</label>
              <input
                type="file"
                id="hotelImg"
                name="hotelImg"
                onChange={handleFileChange}
                required
              />
            </div>
            <div>
              <button>Submit</button>
            </div>
          </form>
        </aside>
      </article>
    </section>
  );
};

export default AddHotels;
