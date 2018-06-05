import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Header extends Component {

  render() {
    let url = document.URL
     //res.className = 'activeLi'
     //console.log(res);
    //  b.className = 'activeLi'
     let setActiveLi = function setActiveLi(url) {
       switch (url) {
         case 'http://localhost:3000/':
          let res = [...document.getElementsByClassName('navBarLi')]
          console.log(res);
          res.map(item => {
            if(item.id !== 'home'){
              item.classList.remove("activeLi")
            }
            if(item.id === 'home'){
              item.classList.add("activeLi");
            //  console.log(item);
            }
            return item
          })

          // let x = document.getElementById('home').classList.add('activeLi');
          // console.log(x);
           break;
           case 'http://localhost:3000/gallery':
           res = [...document.getElementsByClassName('navBarLi')]
           res.map(item => {
             if(item.id !== 'gallery'){
               item.classList.remove("activeLi")
             }
             if(item.id === 'gallery'){
               item.classList.add("activeLi");
             }
             return item
           })
             break;
             case 'http://localhost:3000/templates':
             res = [...document.getElementsByClassName('navBarLi')]
             res.map(item => {
               if(item.id !== 'templates'){
                 item.classList.remove("activeLi")
               }
               if(item.id === 'templates'){
                 item.classList.add("activeLi");
               }
               return item
             })
               break;
               case 'http://localhost:3000/themes':
               res = [...document.getElementsByClassName('navBarLi')]
               res.map(item => {
                 if(item.id !== 'themes'){
                   item.classList.remove("activeLi")
                 }
                 if(item.id === 'themes'){
                   item.classList.add("activeLi");
                 }
                 return item
               })
                 break;
                 case 'http://localhost:3000/contact':
                 res = [...document.getElementsByClassName('navBarLi')]
                 res.map(item => {
                   if(item.id !== 'contact'){
                     item.classList.remove("activeLi")
                   }
                   if(item.id === 'contact'){
                     item.classList.add("activeLi");
                   }
                   return item
                 })
                   break;
         default:

       }
     }
     setActiveLi(url)
    return (
      <header className ="header">
        <section>
          <div className="container">
            <div className ="row">
                <div className ="col-lg-12 logoWrapper">
                      <a href="" className ="logo">
                        <img src="/images/Logo.png" alt="Logo"/>
                      </a>
                </div>
            </div>
          </div>
                  <nav className ="navbar navbar-default" id="navbarId">
                    <div className="menuDiv container">
                      <ul className ="nav navbar-nav">
                        <li id="home" className="navBarLi"><Link to="/" className="link" >Home</Link></li>
                        <li id="gallery" className="navBarLi"><Link to="/gallery/" className="link">Gallery</Link></li>
                        <li id="templates" className="navBarLi"><Link to="/templates" className="link">Templates</Link></li>
                        <li id="themes" className="navBarLi"><Link to="/themes" className="link">Themes</Link></li>
                        <li id="contact" className="navBarLi"><Link to="/contact" className="link">Contact</Link></li>
                      </ul>
                      <form className="searchBar" action="#" method="get">
                        <input type="text" className="searchInput" placeholder="Tell Me What You Need..."/>
                      </form>
                    </div>
                  </nav>
        </section>


      </header>
    )
  }
}

export default Header;
