import { Button, ButtonGroup } from '@chakra-ui/react'
function Pagination({currentPage,totalPages,onPageChange}) {
  return (
    <div className="pagination">
        
        <Button onClick={()=>onPageChange(currentPage-1)} disabled={currentPage===1}colorScheme='blue'>Previous</Button>
        <Button onClick={()=>onPageChange(currentPage+1)} disabled={currentPage===totalPages}colorScheme='blue'>Next</Button>
    </div>
  )
}

export default Pagination