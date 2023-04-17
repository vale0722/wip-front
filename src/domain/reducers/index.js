import { areaPlanDataForm } from 'domain/reducers/area_plan_form.reducer';
import {
  areaPlan,
  areaPlans,
  areaCompetences,
  performanceIndicators,
  areaTopics,
} from 'domain/reducers/area_plan.reducer';
import { areaPlanClone } from 'domain/reducers/area_plan_clone.reducer';
import { grade, grades } from 'domain/reducers/grade.reducer';
import { teacher, teachers } from 'domain/reducers/teacher.reducer';
import { groups } from 'domain/reducers/group.reducer';
import { area } from 'domain/reducers/area.reducer';
import { subjects } from 'domain/reducers/subjects.reducer';

export default {
  grade,
  grades,
  subjects,
  areaPlanDataForm,
  performanceIndicators,
  areaTopics,
  areaCompetences,
  areaPlan,
  areaPlans,
  areaPlanClone,
  area,
  teachers,
  teacher,
  groups,
};
