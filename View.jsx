import React, { useState } from 'react'
import Nav from './Nav'


const ViewAll = () => {

  const [data,changeData]=useState([
    {"name":"devu","email":"d@getDefaultNormalizer.com","ph":9856322114,"profile":"https://tse1.mm.bing.net/th?id=OIP.ZLBpRk7WpBBVqHclmK8ndwHaH_&pid=Api&P=0&h=220"},
    {"name":"jelu","email":"d@getDefaultNormalizer.com","ph":9856322114,"profile":"https://tse1.mm.bing.net/th?id=OIP.zRG7_6cFjh5TdxTbdW_SkgHaH_&pid=Api&P=0&h=220"},
    {"name":"arjun","email":"d@getDefaultNormalizer.com","ph":9856322114,"profile":"https://tse1.mm.bing.net/th?id=OIP.ZLBpRk7WpBBVqHclmK8ndwHaH_&pid=Api&P=0&h=220"},
    {"name":"devika","email":"d@getDefaultNormalizer.com","ph":9856322114,"profile":"https://tse1.mm.bing.net/th?id=OIP.zRG7_6cFjh5TdxTbdW_SkgHaH_&pid=Api&P=0&h=220"},
    {"name":"achu","email":"d@getDefaultNormalizer.com","ph":9856322114,"profile":"https://tse1.mm.bing.net/th?id=OIP.ZLBpRk7WpBBVqHclmK8ndwHaH_&pid=Api&P=0&h=220"},
    {"name":"anju","email":"d@getDefaultNormalizer.com","ph":9856322114,"profile":"https://tse1.mm.bing.net/th?id=OIP.zRG7_6cFjh5TdxTbdW_SkgHaH_&pid=Api&P=0&h=220"}
  ])
  return (
    <div>
     <Nav/>

     
    <div class="container">
        <div class="row ">
            <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div class="row g-3">
                    {
                      data.map(
                        (value,index)=>{
                          return <div class="col col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
                          <div class="card">
                              <img src={value.profile} class="card-img-top" alt="..."/>
                              <div class="card-body">
                                <h5 class="card-title">Name:{value.name}</h5>
                                <p class="card-text">email:{value.email}</p>
                                <p class="card-text">Ph:{value.ph}</p>
                                <a href="#" class="btn btn-primary">View Details</a>
                              </div>
                            </div>
                      </div>
                      
                        }
                      )
                    }
                  
                 
            
                
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default ViewAll