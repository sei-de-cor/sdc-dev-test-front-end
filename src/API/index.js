import MOCK_COMPANY_INFO from '../MOCKS/company_info.json';

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

    },
    set:{

    }
}

const API = {
    Company,
    Categories
}

export default API;