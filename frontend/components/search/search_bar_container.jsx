import {connect} from "react-redux"
import SearchBar from "../search_bar"
import { getSearchBusinesses } from "../../actions/business_actions"
import { withRouter } from "react-router-dom"

const mDTP = dispatch => {
    return {
        getSearchBusinesses: query => dispatch(getSearchBusinesses(query))
    }
};

export default withRouter(connect(null, mDTP)(SearchBar))