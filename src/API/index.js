import MOCK_COMPANY_INFO from '../MOCKS/company_info.json';
import MOCK_CATEGORIAS from '../MOCKS/categories.json'
import MOCK_COURSES from '../MOCKS/courses.json';

const Company = {
    get: {
        info: async ()=>  {
            return new Promise((resolve,reject)=>{
                setTimeout(()=>{
                    resolve(MOCK_COMPANY_INFO)
                },2000)
            })
        }
    },
    set: {

    }
}

const Categories = {
    get:{
        info: async ()=>  {
            return new Promise((resolve,reject)=>{
                setTimeout(()=>{
                    resolve(MOCK_CATEGORIAS)
                },2000)
            })
        }
    },
    set:{
    }
}

const Cursos = {
    get:{
        info: async ()=>  {
            return new Promise((resolve,reject)=>{
                setTimeout(()=>{
                    resolve(MOCK_COURSES)
                },2000)
            })
        }
    },
    set:{

    }
}

const API = {
    Company,
    Categories,
    Cursos
}

export default API;