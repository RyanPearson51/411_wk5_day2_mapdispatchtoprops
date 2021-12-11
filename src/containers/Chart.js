import { connect } from "react-redux"
import Chart from '../components/Chart'

const mapStateToProps = (state) => ({
    cars: state.cars
})

export default connect(mapStateToProps)(Chart)