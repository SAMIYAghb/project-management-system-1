import noData from "./../../assets/images/no-data.png";
export default function NoData() {
  return (
    <div className="text-center bg-white ">
            <img src={noData} className="img-fluid"/>
           <p> No data Found</p>
           
            </div>
  )
}