import { areaPlanDataForm } from 'domain/reducers/area_plan_form.reducer';
import {
  areaPlan,
  areaCompetences,
  performanceIndicators,
  areaTopics,
} from 'domain/reducers/area_plan.reducer';
import { areaPlanClone } from 'domain/reducers/area_plan_clone.reducer';
import { grade, grades } from 'domain/reducers/grade.reducer';
import { area } from 'domain/reducers/area.reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  areaPlanDataForm,
  performanceIndicators,
  areaTopics,
  areaCompetences,
  areaPlan,
  areaPlanClone,
  area,
  grade,
  grades,
});

export default rootReducer;
