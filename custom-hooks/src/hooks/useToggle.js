import { useState, useCallback } from "react";

export const useToggle = (initial) => {  
  const [open, setOpen] = useState(initial);   
  
  return [open, useCallback(() => setOpen(status => !status), [])];
};

/* USAGE EXAMPLE 
const Landing = ({ products, total, pages }) => {  
  const [open, toggle] = useToggle(false);
  return (    
    <>      
    {open && <Filters />}       
    <FlexContainer>          
        <Button onClick={toggle}>Refine search</Button>
        <Link to="/reviews"><Button>View reviews</Button></Link
    </FlexContainer>
    </>
*/