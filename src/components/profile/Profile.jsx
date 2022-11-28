import React from 'react'
import Style from "./profile.module.css";
import ProfileMainblock from './ProfileMainblock';
import ProfileSidebar from './ProfileSidebar';

const profile = () => {
  return (
    <section id={Style.profileBlock}>
      <article>
        <ProfileSidebar />
        <ProfileMainblock />
      </article>
    </section>
  );
}

export default profile