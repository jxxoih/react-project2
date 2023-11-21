import AdminAbout from "components/admin/AdminAbout";
import AdminCompany from "components/admin/AdminCompany";
import AdminProject from "components/admin/AdminProject";
import { useEffect } from "react";
import { useState } from "react";

import * as appUtill from "utills/appUtill";
import * as config from "config";

const AdminMain = (props) => {
    const { isMobile, setLoading } = props;
    const [companyData, setCompanyData] = useState([]);
    const [projectData, setProjectData] = useState([]);
    const [skillList, setSkillList] = useState([]);
    const [aboutData, setAboutData] = useState([]);


    const reqData = async (arg) => {
        if (arg === 0) {
            appUtill.resolveData(config.GET_ABOUT_ACTION).then((resolvedData) =>
                setAboutData(resolvedData[0])
            );
        } else if (arg === 1) {
            appUtill.resolveData(config.GET_ADMIN_COMPANY_ACTION).then((resolvedData) =>
                setCompanyData(resolvedData)
            );
        } else if (arg === 2) {
            appUtill.resolveData(config.GET_ADMIN_PROJECT_ACTION).then((resolvedData) =>
                setProjectData(resolvedData)
            );
        } else {
            appUtill.resolveData(config.GET_ABOUT_ACTION).then((resolvedData) =>
                setAboutData(resolvedData[0])
            );
            appUtill.resolveData(config.GET_ADMIN_COMPANY_ACTION).then((resolvedData) =>
                setCompanyData(resolvedData)
            );
            appUtill.resolveData(config.GET_ADMIN_PROJECT_ACTION).then((resolvedData) =>
                setProjectData(resolvedData)
            );
            appUtill.resolveData(config.GET_SKILL_LIST).then((resolvedData) =>
                setSkillList(resolvedData)
            );
        }
        
        await setLoading(false);
    }

    useEffect(() => {
        setLoading(true);
        reqData();
    }, []);

    return (
        <div className="adminFrame">
            {
                aboutData && (
                    <AdminAbout
                        isMobile={isMobile}
                        aboutDataList={aboutData}
                        reqData={reqData}
                    />
                )
            }
            {
                companyData && (
                    <AdminCompany
                        companyDataList={companyData}
                        reqData={reqData}
                    />
                )
            }
            {
                projectData && (
                    <AdminProject
                        companyData={companyData}
                        projectDataList={projectData}
                        skillList={skillList}
                        reqData={reqData}
                    />
                )
            }
        </div>
    );
}

export default AdminMain;