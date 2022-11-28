import React from 'react'
import AdminMain from './AdminMain'
import AdminSideBar from './AdminSideBar'
import Style from "./_admin.module.css"

const Admin = () => {
  return (
    <section id={Style.adminBlock}>
      <article>
        <AdminSideBar />
        <AdminMain />
      </article>
    </section>
  );
}

export default Admin