export const CITY_QUERY = `
query{
    cities{
      data{
        id
        attributes{
          name
          slug
          country
          description
          image{
            data{
              attributes{
                    formats
                
              }
            }
          }
        }
      }
    }
  }`;

export const GET_CITY_QUERY = `
query getCity($slug: String!){
    cities(filters: {slug: {eq: $slug}}){
      data{
        id
        attributes{
          name
          slug
          country
          description
          image{
            data{
              attributes{
                    formats
                
              }
            }
          }
        }
      }
    }
  }`;

export const BUS_PROVIDERS_QUERY = `
query{
  busOperators{
    data{
      id
      attributes{
        bus_provider_name
        phone
        slug
        price
        rating
        availability
        bus_image{
          data{
            attributes{
              formats
            	}
            }
        }
        cities{
          data{
            attributes{
              name
            }
          }
        }
      }
    }
  }
}`;

export const FROM_CITY_QUERY = (fromID) => {
  return `
  query{
    city(id: ${fromID}){
      data{
        attributes{
          name
          trip_froms{
            data{
              id
              attributes{
                bus{
                  data{
                    attributes{
                      bus_provider_name
                      rating
                    }
                  }
                }
                departure
                arrival
                fare
                departure_time
                arrival_time
                fare
                bus_type
                available_seats
                reserved_seats
                amenities
              }
            }
          }
        }
      }
    }
  }`;
}

export const TO_CITY_QUERY = (toID) => {
  return `
  query{
    city(id: ${toID}){
      data{
        attributes{
          name
          trip_tos{
            data{
              id
              attributes{
                bus{
                  data{
                    attributes{
                      bus_provider_name
                      rating
                    }
                  }
                }
                departure
                arrival
                fare
                departure_time
                arrival_time
                fare
                bus_type
                available_seats
                reserved_seats
                amenities
              }
            }
          }
        }
      }
    }
  }`;
}

export const GET_TRIP_QUERY = (id) => {return `
  query{
    trip(id: ${id}){
      data{
        attributes{
          reserved_seats
          available_seats
        }
      }
    }
  }
`;}

