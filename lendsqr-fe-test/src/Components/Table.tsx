import React, {useState, useEffect} from 'react';
import './table.scss';
import vector3 from '../Images/vector3.png';
import Items from './Items';
import ReactPaginate from 'react-paginate';
import { FilterUserOption } from './DashboardOptions';

interface Props {
  data: any | undefined;
  itemsPerPage: number;
}

interface Profile {
  firstName:string;
  lastName: string;
}

interface User {
  orgName: string;
  profile: Profile;
  email: string;
  phoneNumber: string;
  createdAt: string;
  id: number;
}


const tableHead: string[] =[
  'ORGNIZATION', 
  'USERNAME',
  'EMAIL',
  'PHONE NUMBER',
  'DATE JOINED',
  'STATUS'
]

const items: number[] = [];

for(let i=0; i< 100; i++) { items.push(1) }

const Table: React.FC<Props> = ({data, itemsPerPage}) => {

  
  const [currentItems, setCurrentItems] = useState<any>(null);
  const [pageCount, setPageCount] = useState<number>(0);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);
  const [filterForm, setFilterForm] = useState(false)

  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setCurrentItems(data.data.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(items.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, data.data]);

  // Invoke when user click to request another page.
  const handlePageClick = (event: any) => {
    const newOffset = event.selected * itemsPerPage % items.length;
    console.log(`User requested page number ${event.selected}, which is offset ${newOffset}`);
    setItemOffset(newOffset);
  };

  return (
    <>
      <div>
        
          <div className='table-container'>
            <table>
              <thead>
                <tr>
                  {tableHead.map((head, index) => {
                    return (
                      <th key={index} onClick={()=> setFilterForm(!filterForm)}>
                        <div className='table-data-head-container'>
                          <span className='table-data-head'>{head}</span> 
                          <span className='table-data-img-container' onClick={()=> {setFilterForm(!filterForm); console.log(filterForm)}}><img src={vector3} alt="drop" /></span> 
                        </div>
                      </th>
                    )
                  })}
                  
                </tr>

                
              </thead>
              
              <tbody>
                {currentItems?.map((user: User) => {
                  return (
                    <Items key={user.id} data={user} />
                  )
                })}
                
              </tbody>
              
            </table>
            <FilterUserOption showFilter={filterForm}  />
          </div>
        
    
        
          <ReactPaginate
            nextLabel=">"
            onPageChange={handlePageClick}
            pageRangeDisplayed={1}
            marginPagesDisplayed={1}
            pageCount={pageCount}
            previousLabel="<"
            pageClassName="page-item"
            pageLinkClassName="page-link"
            previousClassName="page-item"
            previousLinkClassName="page-link"
            nextClassName="page-item"
            nextLinkClassName="page-link"
            breakLabel="..."
            breakClassName="page-item"
            breakLinkClassName="page-link"
            containerClassName="pagination"
            activeClassName="active"
            renderOnZeroPageCount={undefined}
          />  
        
      </div>
    </>
  )
}

export default Table