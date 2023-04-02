import service from 'domain/services/service';

async function index(setIsLoading) {
    setIsLoading(true);
  
    try {
      const response = await service.get(`/api/teachers`);
      setIsLoading(false);
      return response.data;
    } catch (error) {
      setIsLoading(false);
      return {};
    }
  }

async function show(setIsLoading, teacherID) {
  setIsLoading(true);
  
  try {
    const response = await service.get(`/api/teachers/${teacherID}`);
    setIsLoading(false);
    return response.data ?? {};
  } catch (error) {
    setIsLoading(false);
    return {};
  }
 }

 async function update(setIsLoading, teacherId, data) {
  setIsLoading(true);

  try {
    const response = await service.put(`/api/teachers/${teacherId}`, data);
    setIsLoading(false);
    return response.data;
  } catch (error) {
    setIsLoading(false);
    return {};
  }
}

async function create(setIsLoading, data) {
  setIsLoading(true);

  try {
    const response = await service.post('/api/teachers', data);
    setIsLoading(false);
    return response.data;
  } catch (error) {
    setIsLoading(false);
    return {};
  }
}

export default {
  index,
  show,
  update,
  create,
};