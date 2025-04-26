
import ListingDetail from '../components/ListingDetail'
import { useParams } from 'react-router-dom'

export default function StudentListingPageDetails() {
  const { id } = useParams<{ id: string }>();
  return (
  <ListingDetail id={id!}/>
  )
}
