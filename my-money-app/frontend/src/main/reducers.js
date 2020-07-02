import { combineReducers } from 'redux'

import DashboardReducer from '../dashboard/dashboardReducer'
import TabReducer from '../common/tab/tabReducer'

// combinação de todos os reducers da aplicação
const rootReducer = combineReducers({
  dashboard: DashboardReducer,
  tab: TabReducer
})

export default rootReducer