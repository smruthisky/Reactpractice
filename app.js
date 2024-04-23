//Creating React  elements using cdn links
const heading1=React.createElement("h1" ,{
        id:"title",
        class:"class",
        key:"h1"
        
    },"Heading 1 from parcel");
    const heading2 =React.createElement(
        "h2" ,
        {
        id:"title",
        key:"h2"
    },
    "Heading2"
    );
    const container=React.createElement(
        "div",{
        id:"container",
    },
    [heading1,heading2]
    );
// const Title=() =>(
//     <a href="/">
//     <img className="logo" src="https://i.pinimg.com/originals/39/96/57/39965743eb30634afdc5906133e19740.png"
//     />
//     </a>
// );
// //config driven ui
// const itemlist=[{


//     // {
//     //     name:"Sarvana Bhavan",
//     //     image:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/4/4/083a3a96-2035-48ec-8537-2fc89acc59d7_737090.jpg",
//     //     Price:"₹89",
//     //     Rating:"4.2 "
//     // }
//     "info": {
//         "id": "690702",
//         "name": "Pizza Hut",
//         "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
//         "locality": "Karapakkam",
//         "areaName": "Thoraipakkam",
//         "costForTwo": "₹350 for two",
//         "cuisines": [
//           "Pizzas"
//         ],
//         "avgRating": 4.3,
//         "parentId": "721",
//         "avgRatingString": "4.3",
//         "totalRatingsString": "1K+",
//         "sla": {
//           "deliveryTime": 23,
//           "lastMileTravel": 1.8,
//           "serviceability": "SERVICEABLE",
//           "slaString": "20-25 mins",
//           "lastMileTravelString": "1.8 km",
//           "iconType": "ICON_TYPE_EMPTY"
//         },
//         "availability": {
//           "nextCloseTime": "2024-04-18 01:00:00",
//           "opened": true
//         },
//         "badges": {
//           "imageBadges": [
//             {
//               "imageId": "Rxawards/_CATEGORY-Pizza.png",
//               "description": "Delivery!"
//             }
//           ]
//         },
//         "isOpen": true,
//         "type": "F",
//         "badgesV2": {
//           "entityBadges": {
//             "imageBased": {
//               "badgeObject": [
//                 {
//                   "attributes": {
//                     "description": "Delivery!",
//                     "imageId": "Rxawards/_CATEGORY-Pizza.png"
//                   }
//                 }
//               ]
//             },
//             "textBased": {
              
//             },
//             "textExtendedBadges": {
              
//             }
//           }
//         },
//         "aggregatedDiscountInfoV3": {
//           "header": "ITEMS",
//           "subHeader": "AT ₹179"
//         },
//         "differentiatedUi": {
//           "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//           "differentiatedUiMediaDetails": {
//             "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//             "lottie": {
              
//             },
//             "video": {
              
//             }
//           }
//         },
//         "reviewsSummary": {
          
//         },
//         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//         "restaurantOfferPresentationInfo": {
          
//         }
//       },
//       "analytics": {
        
//       },
//       "cta": {
//         "link": "https://www.swiggy.com/restaurants/pizza-hut-karapakkam-thoraipakkam-chennai-690702",
//         "type": "WEBLINK"
//       }
//     },
//     {
//       "info": {
//         "id": "485445",
//         "name": "Chinese Wok",
//         "cloudinaryImageId": "e0839ff574213e6f35b3899ebf1fc597",
//         "locality": "Old Mahabalipuram Road OMR",
//         "areaName": "Old Mahabalipuram Road OMR",
//         "costForTwo": "₹250 for two",
//         "cuisines": [
//           "Chinese",
//           "Asian",
//           "Tibetan",
//           "Desserts"
//         ],
//         "avgRating": 4,
//         "parentId": "61955",
//         "avgRatingString": "4.0",
//         "totalRatingsString": "1K+",
//         "sla": {
//           "deliveryTime": 24,
//           "lastMileTravel": 3.7,
//           "serviceability": "SERVICEABLE",
//           "slaString": "20-25 mins",
//           "lastMileTravelString": "3.7 km",
//           "iconType": "ICON_TYPE_EMPTY"
//         },
//         "availability": {
//           "nextCloseTime": "2024-04-18 02:00:00",
//           "opened": true
//         },
//         "badges": {
          
//         },
//         "isOpen": true,
//         "type": "F",
//         "badgesV2": {
//           "entityBadges": {
//             "imageBased": {
              
//             },
//             "textBased": {
              
//             },
//             "textExtendedBadges": {
              
//             }
//           }
//         },
//         "aggregatedDiscountInfoV3": {
//           "header": "ITEMS",
//           "subHeader": "AT ₹149"
//         },
//         "differentiatedUi": {
//           "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//           "differentiatedUiMediaDetails": {
//             "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//             "lottie": {
              
//             },
//             "video": {
              
//             }
//           }
//         },
//         "reviewsSummary": {
          
//         },
//         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//         "restaurantOfferPresentationInfo": {
          
//         }
//       },
//       "analytics": {
        
//       },
//       "cta": {
//         "link": "https://www.swiggy.com/restaurants/chinese-wok-old-mahabalipuram-road-omr-chennai-485445",
//         "type": "WEBLINK"
//       }
//     },
//     {
//       "info": {
//         "id": "89583",
//         "name": "UBQ by Barbeque Nation",
//         "cloudinaryImageId": "xgj2cn4y2y8mtxisaplp",
//         "locality": "Thuraipakkam",
//         "areaName": "Thuraipakkam",
//         "costForTwo": "₹300 for two",
//         "cuisines": [
//           "North Indian",
//           "Barbecue",
//           "Biryani",
//           "Kebabs",
//           "Mughlai",
//           "Desserts"
//         ],
//         "avgRating": 3.9,
//         "parentId": "10804",
//         "avgRatingString": "3.9",
//         "totalRatingsString": "1K+",
//         "sla": {
//           "deliveryTime": 34,
//           "lastMileTravel": 3,
//           "serviceability": "SERVICEABLE",
//           "slaString": "30-35 mins",
//           "lastMileTravelString": "3.0 km",
//           "iconType": "ICON_TYPE_EMPTY"
//         },
//         "availability": {
//           "nextCloseTime": "2024-04-17 16:30:00",
//           "opened": true
//         },
//         "badges": {
          
//         },
//         "isOpen": true,
//         "type": "F",
//         "badgesV2": {
//           "entityBadges": {
//             "imageBased": {
              
//             },
//             "textBased": {
              
//             },
//             "textExtendedBadges": {
              
//             }
//           }
//         },
//         "aggregatedDiscountInfoV3": {
//           "header": "ITEMS",
//           "subHeader": "AT ₹179"
//         },
//         "differentiatedUi": {
//           "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//           "differentiatedUiMediaDetails": {
//             "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//             "lottie": {
              
//             },
//             "video": {
              
//             }
//           }
//         },
//         "reviewsSummary": {
          
//         },
//         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//         "restaurantOfferPresentationInfo": {
          
//         }
//       },
//       "analytics": {
        
//       },
//       "cta": {
//         "link": "https://www.swiggy.com/restaurants/ubq-by-barbeque-nation-thuraipakkam-chennai-89583",
//         "type": "WEBLINK"
//       }
//     },
//     {
//       "info": {
//         "id": "307780",
//         "name": "Barbeque Nation",
//         "cloudinaryImageId": "ajmtkvs0nhmk4fhcxwjf",
//         "locality": "Thuraipakkam",
//         "areaName": "Thuraipakkam",
//         "costForTwo": "₹600 for two",
//         "cuisines": [
//           "North Indian",
//           "Barbecue",
//           "Biryani",
//           "Kebabs",
//           "Mughlai",
//           "Desserts"
//         ],
//         "avgRating": 3.9,
//         "parentId": "2438",
//         "avgRatingString": "3.9",
//         "totalRatingsString": "1K+",
//         "sla": {
//           "deliveryTime": 32,
//           "lastMileTravel": 3,
//           "serviceability": "SERVICEABLE",
//           "slaString": "30-35 mins",
//           "lastMileTravelString": "3.0 km",
//           "iconType": "ICON_TYPE_EMPTY"
//         },
//         "availability": {
//           "nextCloseTime": "2024-04-17 16:30:00",
//           "opened": true
//         },
//         "badges": {
          
//         },
//         "isOpen": true,
//         "type": "F",
//         "badgesV2": {
//           "entityBadges": {
//             "imageBased": {
              
//             },
//             "textBased": {
              
//             },
//             "textExtendedBadges": {
              
//             }
//           }
//         },
//         "aggregatedDiscountInfoV3": {
//           "header": "ITEMS",
//           "subHeader": "AT ₹179"
//         },
//         "differentiatedUi": {
//           "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//           "differentiatedUiMediaDetails": {
//             "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//             "lottie": {
              
//             },
//             "video": {
              
//             }
//           }
//         },
//         "reviewsSummary": {
          
//         },
//         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//         "restaurantOfferPresentationInfo": {
          
//         }
//       },
//       "analytics": {
        
//       },
//       "cta": {
//         "link": "https://www.swiggy.com/restaurants/barbeque-nation-thuraipakkam-chennai-307780",
//         "type": "WEBLINK"
//       }
//     },
//     {
//       "info": {
//         "id": "203407",
//         "name": "Wow! Momo",
//         "cloudinaryImageId": "64fd45fd9f44c1737bc446e470bed666",
//         "locality": "Thuraipakkam",
//         "areaName": "Thuraipakkam",
//         "costForTwo": "₹300 for two",
//         "cuisines": [
//           "Tibetan",
//           "Healthy Food",
//           "Asian",
//           "Chinese",
//           "Snacks",
//           "Continental",
//           "Desserts",
//           "Beverages"
//         ],
//         "avgRating": 4.2,
//         "parentId": "1776",
//         "avgRatingString": "4.2",
//         "totalRatingsString": "5K+",
//         "sla": {
//           "deliveryTime": 23,
//           "lastMileTravel": 1,
//           "serviceability": "SERVICEABLE",
//           "slaString": "20-25 mins",
//           "lastMileTravelString": "1.0 km",
//           "iconType": "ICON_TYPE_EMPTY"
//         },
//         "availability": {
//           "nextCloseTime": "2024-04-17 23:00:00",
//           "opened": true
//         },
//         "badges": {
//           "imageBadges": [
//             {
//               "imageId": "Rxawards/_CATEGORY-Chinese.png",
//               "description": "Delivery!"
//             }
//           ]
//         },
//         "isOpen": true,
//         "type": "F",
//         "badgesV2": {
//           "entityBadges": {
//             "imageBased": {
//               "badgeObject": [
//                 {
//                   "attributes": {
//                     "description": "Delivery!",
//                     "imageId": "Rxawards/_CATEGORY-Chinese.png"
//                   }
//                 }
//               ]
//             },
//             "textBased": {
              
//             },
//             "textExtendedBadges": {
              
//             }
//           }
//         },
//         "aggregatedDiscountInfoV3": {
//           "header": "50% OFF",
//           "subHeader": "UPTO ₹100"
//         },
//         "differentiatedUi": {
//           "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//           "differentiatedUiMediaDetails": {
//             "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//             "lottie": {
              
//             },
//             "video": {
              
//             }
//           }
//         },
//         "reviewsSummary": {
          
//         },
//         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//         "restaurantOfferPresentationInfo": {
          
//         }
//       },
//       "analytics": {
        
//       },
//       "cta": {
//         "link": "https://www.swiggy.com/restaurants/wow-momo-thuraipakkam-chennai-203407",
//         "type": "WEBLINK"
//       }
//     },
//     {
//       "info": {
//         "id": "808105",
//         "name": "Burger King",
//         "cloudinaryImageId": "aa77cb6fce4d94f3ad4b4e7fb42782db",
//         "locality": "Nehru Nagar",
//         "areaName": "OMR Thoraipakam",
//         "costForTwo": "₹350 for two",
//         "cuisines": [
//           "Burgers",
//           "American"
//         ],
//         "avgRating": 4.4,
//         "parentId": "166",
//         "avgRatingString": "4.4",
//         "totalRatingsString": "500+",
//         "sla": {
//           "deliveryTime": 23,
//           "lastMileTravel": 3,
//           "serviceability": "SERVICEABLE",
//           "slaString": "20-25 mins",
//           "lastMileTravelString": "3.0 km",
//           "iconType": "ICON_TYPE_EMPTY"
//         },
//         "availability": {
//           "nextCloseTime": "2024-04-18 01:00:00",
//           "opened": true
//         },
//         "badges": {
//           "imageBadges": [
//             {
//               "imageId": "Rxawards/_CATEGORY-Burger.png",
//               "description": "Delivery!"
//             }
//           ]
//         },
//         "isOpen": true,
//         "type": "F",
//         "badgesV2": {
//           "entityBadges": {
//             "imageBased": {
//               "badgeObject": [
//                 {
//                   "attributes": {
//                     "description": "Delivery!",
//                     "imageId": "Rxawards/_CATEGORY-Burger.png"
//                   }
//                 }
//               ]
//             },
//             "textBased": {
              
//             },
//             "textExtendedBadges": {
              
//             }
//           }
//         },
//         "aggregatedDiscountInfoV3": {
//           "header": "ITEMS",
//           "subHeader": "AT ₹139"
//         },
//         "differentiatedUi": {
//           "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//           "differentiatedUiMediaDetails": {
//             "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//             "lottie": {
              
//             },
//             "video": {
              
//             }
//           }
//         },
//         "reviewsSummary": {
          
//         },
//         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//         "isNewlyOnboarded": true,
//         "restaurantOfferPresentationInfo": {
          
//         }
//       },
//       "analytics": {
        
//       },
//       "cta": {
//         "link": "https://www.swiggy.com/restaurants/burger-king-nehru-nagar-omr-thoraipakam-chennai-808105",
//         "type": "WEBLINK"
//       }
//     },
        
// ]
    
// //props
// // const Card=(props)=>{
// //     return(
// //         <div className="cards">
// //        <img  src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+props.restaurant.info?.cloudinaryImageId}/>
// //         <div className="textcontent">
// //         <h2>{props.restaurant.info?.name} </h2>
// //         <h3>{props.restaurant.info?.cuisines.join(',')}</h3>
        
// //         <h4>{props.restaurant.info?.avgRating}stars</h4>
// //         </div>
    
// //         </div>
       
// //     );
// // };

// const Card=({cloudinaryImageId,name,cuisines,avgRating})=>{
//     return(
//         <div className="cards">
//        <img  src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId}/>
//         <div className="textcontent">
//         <h2>{name} </h2>
//         <h3>{cuisines.join(',')}</h3>
        
//         <h4>{avgRating}stars</h4>
//         </div>
    
//         </div>
       
//     );
// };
// const Body=()=>{
    



    
//     return(
//         <div className="resturant-list">
            
//           {/* <Card name = {itemlist[0].info.name} 
//           cloudinaryImageId={itemlist[0].info.cloudinaryImageId } 
//           avgRating={itemlist[0].info.avgRating}
//           /> */}

//            {/* using spread operator */}
//          {/* <Card  {...itemlist[0].info}/> 
         
//         <Card  {...itemlist[1].info}/>
//         <Card {...itemlist[2].info}/>
//         <Card {...itemlist[3].info}/>
//         <Card  {...itemlist[4].info}/> */}

//         {/* using map */}
//         {
//             itemlist.map((resturant)=>{
//                 return <Card {...resturant.info} key={resturant.info.id}/>
//             })
//         }

//         </div>
      
    
//     );
  
// };
// const Footer=()=>{
//     return(
//     <h3>Footer</h3>
//     );
// };
// const Header= ()=>
// {
//     return (
//         <div className="header">
//           <Title/>
//            <div className="nav-items">
//             <ul>
//              <li>Home</li>
//              <li>About us</li>
//              <li>Contact</li>
//              <li>Cart</li>
//             </ul>
           
//            </div>
          
//         </div>
//     );
// };

// const AppLayout=()=>{
//     return(
//         <>
//          <Header/>
//         <Body/>
//         <Footer/>
//         </>
       
//     );
    
// };
    const root=ReactDOM.createRoot(document.getElementById("root"));
    // root.render(heading1);
  
    root.render(container);



    