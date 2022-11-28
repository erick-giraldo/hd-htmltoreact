import isEmpty from "is-empty";
import React, { useEffect, useState } from "react";
import "./assets/scss/Blog.scss";
import BlogController from "./BlogController";
import Swal from 'sweetalert2'
import bgpost1 from '../assets/images/blog/blog-1.webp'


const Blog = () => {
  const [post, setPost] = useState([]);
  
  const getPost = async () => {
      try {
        const result = await BlogController.getAllPost();
        if (!isEmpty(result)) {
          setPost(post);
        }
      } catch (error) {
        Swal.fire({
          icon: "error",
          showConfirmButton: false,
          title: "Oops... no se pudo obtener data",
          text: `${error}`,
        });
      }
  };
  useEffect(() => {
    getPost();
  }, []);

  const listPost = (items) => {

   const data = items.map((e)=>{
      console.log(e.image)
      return(
        <img src={`../assets/images/${e.image}`} />
      )
    })


    // const data = (
    //   <div className="row blog-row">
    //     <h1>CONTENIDO DESTACADO</h1>
    //     <img src={bgpost1} />
    //     {items.map((post) => (

    //       <article className="col-12 col-md-6 blog-post">
    //         <a
    //           href="post.html"
    //           className="effect-blog blog-post-link blog-pt-60"
    //         >
    //           <div className="blog-post-link-inner">
    //             <img
    //               src={ url + post.image}
    //               alt="blog-1"
    //               className="img-fluid"
    //             />
    //           </div>
    //           {post.new === true
    //             ? `<span className="rebote position-absolute blog-new-badge bounce"
    //     >New</span>`
    //             : ""}
    //           <h2 className="blog-pt-30 blog-color-primary blog-post-title">
    //             {post.name}
    //           </h2>
    //         </a>
    //         <p className="blog-pt-30">{post.description}</p>
    //         <div className="d-flex justify-content-between blog-pt-45">
    //           <span className="blog-color-primary">{post.tag}</span>
    //           <span className="blog-color-primary">{post.date}</span>
    //         </div>
    //         <hr />
    //         <div className="d-flex justify-content-between">
    //           <span>{post.Comments}</span>
    //           <span>{post.autor}</span>
    //         </div>
    //       </article>
    //     ))}
    //   </div>
    // );
    return data;
  };

  return (
    <main className="col-lg-10 col-md-12 col-sm-12 main-container">
      <div className="menu-user">
        <div className="dropdown">
          <a
            className="btn btn-secondary dropdown-toggle"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <div id="user-sesion" />
            <i className="fas fa-user-check" />
          </a>
          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item" id="logout" href="#">
                cerrar sesión
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="referencia">
        <nav aria-label="breadcrumb">
          <ol className="descolgado breadcrumb">
            <li className="breadcrumb-item">
              <a href="../index.html">Inicio</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Blog
            </li>
          </ol>
        </nav>
      </div>
      <div className="blog-contenido">{listPost(post)}</div>
    </main>
  );
};

export default Blog;
