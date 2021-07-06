import React from 'react'
import {Component} from 'react'

class Navigation extends Component
{
  constructor(props)
  {
    super(props)

  }
  render()
  {
    return (
      <div class="head">
        <div class="header__logo">
            <ul class="left">
                <li class="header--location">
                    <i class="fas fa-map-marker-alt"></i>   
                    <span >Australia</span>
                </li>
                <li class="changeEth">
                    <span >English</span>
                </li>
                <li class="phone-number">
                    <i class="fas fa-phone"></i>
                     <span class="phone-number">+61.1300.442.878</span>
                </li>
                
            </ul>

            <ul class="logo">
                <a class="tab-logo">Gucci</a>
            </ul>
            <ul class="tool">
                <li class="header--signin">                      
                    <span >Sign In </span>
                    <i class="far fa-heart"></i>
                </li>

                <li class="header--blog">
                    <i class="fas fa-shopping-bag"></i>
                    <span >Blog</span>

                </li>

                <li class="search">
                    <i class="fas fa-search"></i>
                </li>
            </ul>
        </div>
        <div class="header__selection">
            
            <ul class="header-nav-selection">
                <li class="header-nav-selection1">
                    
                    <div class="header-tittle">                                            
                        <a href="">What's New</a> 
                    </div>
                    <div class="dropdown">
                       <div class="drop-content">
                            <div class="dropleft">
                                <ul class="left-1">
                                  <div>
                                    <h3>Shop New In</h3>
                                    <a href="">Women</a>
                                    <a href="">Men</a>
                                    <a href="">Resort Collection</a>
                                    <a href="">GG Multicolor</a>
                                    <a href="">Gucci Link To Live</a>
                                    <a href="">The Alchemist's Garden</a>
                                    <a href="">Hollywood Forever</a>
                                    
                                  </div>

                                       
                                  <div>
                                    <h3>Beloved Handbags ♥</h3>
                                    <a href="">GG Marmont</a>
                                    <a href="">Dionysus</a>
                                    <a href="">Gucci Horsebit 1955</a>
                                    <a href="">Jackie 1961</a>
                                    
                                  </div>
                                    
                                </ul>

                                
                            </div>
                            <div class="dropmid"></div>
                            <div class="dropright"></div>
                       </div>
                    </div>
                    
                    
                </li>
                <li class="header-nav-selection2">
                    <div class="header-tittle">  
                        <a href="">Handbags</a>  
                        <div class="dropdown2">
                            
                                <div class="drop">
                                  
                                        <h3>sang ngang nè</h3>
                                        <div class="drop-right">
                                        </div>
                                  
                                 </div>
                        </div>                                           
                        
                   </div>
                </li>
                <li class="header-nav-selection3">
                    <div class="header-tittle">                       
                        <a href="">Women</a>                                             
                        
                   </div>
                </li>
                <li class="header-nav-selection4">
                    <div class="header-tittle">                       
                        <a href="">Men</a>                                             

                   </div>
                </li>
                <li class="header-nav-selection5">
                    <div class="header-tittle">                       
                        <a href="">Children</a>                                             

                   </div>
                </li>
                <li class="header-nav-selection5">
                    <div class="header-tittle">                       
                        <a href="">Gift</a>                                             

                   </div>
                </li>
                <li class="header-nav-selection5">
                    <div class="header-tittle">                       
                        <a href="">Beauty</a>                                             

                   </div>
                </li>
                <li class="header-nav-selection5">
                    <div class="header-tittle">                       
                        <a href="">Decor</a>                                             

                   </div>
                </li>
            </ul>

        </div>
        
    </div>
    )
  }
}
export {
  Navigation
}