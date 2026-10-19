/**
 * PLX01 exact full name + NAP. Name = the store's full name as used on its Google Business Profile.
 * Public GBP primary phone only. Map link = this store's own Google place ID.
 */
export const FULL_NAME_NAP = {
  "code": "PLX01",
  "fullName": "The Planet X Cannabis Dispensary Weed Delivery",
  "street": "3005 Islington Ave, Unit 1",
  "city": "North York",
  "region": "ON",
  "postal": "M9L 2K9",
  "phoneDisplay": "(289) 217-2773",
  "phoneTel": "tel:+12892172773",
  "hours": "Open 24 hours, 7 days a week",
  "mapsUrl": "https://www.google.com/maps/place/?q=place_id:ChIJI8-tDxA7K4gR9ZxL9FCUgBs",
  "placeId": "ChIJI8-tDxA7K4gR9ZxL9FCUgBs",
  "neighbourhood": "Humber Summit, North York",
  "intersection": "Islington Ave & Steeles Ave W",
  "transit": "Accessible via TTC bus routes along Islington Avenue and Steeles Avenue West.",
  "visitPath": "/visit"
} as const;

export const FULL_NAME_NAP_ADDRESS = `${FULL_NAME_NAP.street}, ${FULL_NAME_NAP.city}, ${FULL_NAME_NAP.region} ${FULL_NAME_NAP.postal}`;
