export interface Property {
  id: number
  title: string
  address: string
  price: string
  status: 'FOR SALE' | 'FOR RENT'
  beds: number
  baths: number
  sqft: number
  image: string
  type: string
  featured?: boolean
}

export const properties: Property[] = [
  {
    id: 1,
    title: 'Modern Cantilevered Villa',
    address: '1234 Beverly Hills, CA 90210',
    price: '$2,450,000',
    status: 'FOR SALE',
    beds: 5,
    baths: 4,
    sqft: 4200,
    type: 'Villa',
    featured: true,
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd561?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 2,
    title: 'Glass House Retreat',
    address: '4567 Sunset Blvd, Malibu, CA',
    price: '$3,890,000',
    status: 'FOR SALE',
    beds: 6,
    baths: 5,
    sqft: 5800,
    type: 'Estate',
    image: 'https://images.unsplash.com/photo-1600596542815-ff7c8c7b98d1?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 3,
    title: 'Luxury Penthouse Suite',
    address: '89 Marina Bay Dr, Miami, FL',
    price: '$8,500/mo',
    status: 'FOR RENT',
    beds: 3,
    baths: 3,
    sqft: 2400,
    type: 'Penthouse',
    image: 'https://images.unsplash.com/photo-1512917774083-646d5fe9c835?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 4,
    title: 'Contemporary Hillside Home',
    address: '200 Crestview Rd, Austin, TX',
    price: '$1,750,000',
    status: 'FOR SALE',
    beds: 4,
    baths: 3,
    sqft: 3200,
    type: 'Single Family',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a17?auto=format&fit=crop&w=800&q=80',
  },
]
