import { getAllListingsRoute } from "./getAllListings";
import { getListingRoute } from "./getListing";
import { addViewToListingRoute } from "./addViewToListing";
import { getUserListingsRoute } from "./getUserListings";
import { createNewListingRoute } from "./createNewListing";
import { updateListingRoute } from "./updateListing";
import { deleteListingRoute } from "./deleteListing";

export default [
    addViewToListingRoute,
    createNewListingRoute,
    deleteListingRoute,
    getAllListingsRoute,
    getListingRoute,
    getUserListingsRoute,
    updateListingRoute,
];