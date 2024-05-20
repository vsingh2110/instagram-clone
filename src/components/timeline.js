import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'
import usePhotos from "../hooks/use-photos";
import Post from "./post";



export default function Sidebar(){

  const { photos } = usePhotos();  
    return (
        <div className="container col-span-2">
         
        {!photos ?(
          <>
          
          
          <Skeleton  count={4} width={640} height={600}  className="mb-5"/>
          
       
          </>

        ):photos?.length > 0 ? (
          photos.map((content)=> <Post key={content.docId} content={content} / >)
        ):(
          <p className="text-center text-2xl">Follow People To See Photos</p>
        ) }


        </div>
    );
};
