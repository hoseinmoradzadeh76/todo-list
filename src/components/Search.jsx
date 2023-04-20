
import { useSearchParams } from "react-router-dom";

const Search = () => {
    const [searchParams,setSearchParams]=useSearchParams();
    
    return (
        <div className="input-group mt-3 w-75" dir="ltr">
            <span class="input-group-text" id="basic-addon1" style={{ background: "purple" }}>
                <i className="bi bi-search" />
            </span>
            <input type="text" class="form-control" placeholder="جستحوی کارها" 
            value={searchParams.get("filter")||""}
            onChange={(event)=>{
              let filter=event.target.value;
              if(filter){
                setSearchParams({filter});
              }else{
                setSearchParams({})
              }
            }}
            aria-label="Search" aria-describedby="basic-addon1" dir="rtl" />
        </div>
    )

}
export default Search;