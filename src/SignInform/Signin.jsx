import React from 'react'
import {Component} from 'react'

class Signin extends Component
{
  constructor(props)
  {
    super(props)

  }
  render()
  {
      return(
               
                 <form class="form1">
                <label > 
                    <div>
                    <p class="sign" align="center">Sign in</p>

                    </div>
                    
                 <input type="text" name="name" class="un" placeholder="Tên Đăng Nhập" />
                 <input type="password" class="pass" placeholder="Mật khẩu" name="password" />
                </label>
                
                <a class="submit" align="center">Sign in</a>
                 <p class="forgot">
                     <a href="">forgot password</a>

                 </p>
                </form>
        
      
      
                      
        
      
      )
  }

}

export{
    Signin
}