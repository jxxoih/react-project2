import * as data from "data";

import styles from "styles/Work.module.css";


const workList = data.WORK_LIST;

const company = data.COMPANY;


const Work = (props) => {
    return (
        <div className={styles.workWrap + " work"}>
            <div className={styles.workContext}>
                <div className={styles.workTitle}>
                    <p className="wrapTitle">
                        Work.
                    </p>
                </div>
                <div className={styles.workContent}>
                    {workList.map((item, idx) => (
                        <div className={styles.wokrs} key={idx}>
                            <div className={styles.companyNm}>
                                <p>
                                    {item.companyNm}
                                </p>
                                <p className={styles.workDt}>
                                    {item.workDT}
                                </p>
                            </div>
                            {item[company[idx]].map((work, idx2) => (
                                <div className={styles.workingList} key={idx2}>
                                    <p className={styles.projectTitle}>
                                        <span
                                            className={!!work.portpolio ? styles.setPortpolio : ""}
                                            onClick={(e) => props.func(work.portpolio, e)}
                                        >
                                            {work.content}
                                        </span>
                                    </p>
                                    <p className={styles.work}>
                                        {work.work}
                                        <span className={styles.bar}>|</span>
                                        {work.datetime}
                                    </p>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Work;