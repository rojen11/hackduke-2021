import React from 'react';
import ReminderCard from '../ReminderCard/reminderCard';
import style from './homeScreenDashboard.module.scss';
import AddIcon from '@mui/icons-material/Add';
import MedicalReportTabel from '../medicalReport/medicalReportTabel';

export default function HomeScreenDashboard() {
    return (
        <div className={style.home}>
            <div className={style.reminderHead}> 
            <h2 className={style.homepageTitle}>Reminders for Buddy</h2>
<AddIcon className={style.addReminderIcon}/>
            </div>
            <ReminderCard/>
            <span className={style.seeAllWrapper}><a href="#" className={style.seeAllLink}>See all reminders</a></span>
            <h2 className={style.homepageTitle}>Buddy's Gallery</h2>
            
            {/* profile section */}
            <div className={style.profileWrapper}>
                <div className={style.profileImageWrapper}>
                    <img src="https://lh3.googleusercontent.com/G-10okQa_Pohi3dxW6Lr5uq6pEIWSR4YDGByO8WvFmhs-k9M6Dt5BzdkVk-o1ySG98pvPbcLXLxQXahU_K-f8uIaZrbGxNN2OiaED-CuldBo-8LGIshcdWeeNZHaZW2QZo-Z42ZnfxvXe_YSdaBs953rOxPBHuAe4ldmUNLLdw9w-0576ZCdgtkwEoCQ49HqPq2Ew-GOtpsOzJ4MZfQlRQeIwdqrZKiLZ5encU-5FFwJ69TkumMUP7mA5kWPoHoqYO-ESJsXU8gPZtvv-HC5EZkUJf1mQGVZafGK_UUp7JJ5ELT6aDHlPXgTJ1Rg0T1NwATq7qPb8U_KCm8bPBRpUDvVLdZ8bt7QmBClInB1Dk8YX6QW1P-JfBIH15ajQdMFgMYV9Il0PSOsva-RG_YH0aGGZEzaPJ8H7A4u2CAFZVPK_FDe1Eif5dDGdGLI9hcAyEFyjQtlkQy9atbnXD7nuCiO5Hzlomng0Pai5imdT1Kv1lEA5wytNQMRmu3kBpbCPI7vVFz1CwhkyRL3fgmKMEonkn05YmAlEEgrXU3ZCZ0DODlfK2Fsxk35rZbpvpdo-mSquSpyeOJ8_ThnXh0LAPSls89OubzzTbECoBN-YzmkBd2NpunaERGbHZUhrIJ7fGV8FEzVUOHK05vopQ7PgG6v9JQlqCMmIbxRIYP7Ch1NfIy-64gWhrhKTrtYYWiERF0OIRHhv1ssYHAGi2wgP4DvvA=w238-h297-no?authuser=0" alt="profile picture" className={style.profilePic}></img>
                    <img src="https://lh3.googleusercontent.com/ke9zMZpbzAg2l-MQ1JB4iWNv1hN2lO2_589_RrfDrBf_2E2miRHSHXabRI19SY8wbVyvrTGGMb7E72DEwbl8pb_6niDrM28D5J6hp9HRqBhdrzm1QnCRdYTZzrZTUoo3PDzubHqZifzd8zxG95OjKB2Kj1rpUFxWR8zNnZSFMp6OyyqKg9kTmRsoQCULoXIVsFwo3MgvIcKZ5RU8uFnvtphNJisvAfMGiBw0KYsl_7kXAmsFJt27EknhftHvP2OOcEZG5jkDK_rXvWICQdwWwc0shCDshOArvX5kYiIvjV8N_K-ayu9UQmQY-7CQ2hCLPOc2tXwRQu4cphiRc6YXfY9AUgUbuqF-SAov-9Q9N7wMjelgLchJKOTR8gnG4G909OAY9m_HyxvNQZrJgzWFIoa3TOs60m71WsYdl3yTlf-sebwz0f_XoHAKrx5QvLeccAhwjyX4uaZ-98KXzNsyMIWNJpd8qhTN-LZv7MWFRbGT58ZTOzaTreVLIN1edtVvV_hOh7ZL_ZjJFn77MX1RAiWND3N-SERhULsiSVv6Apm7U44X2Tav49eiWHXsE92LCUG00jeVRheVhufk5YTD7yaps_ee0LqY61rPxtpnTEucNdXbKT7k6yjUon9rTBVSrsdskKgvJ72Ot7NMGC_teKEY4Ln8XEmXP_eWlqttXVZHDPaZ7tgV8tNoMSqroZwmhdzY-4QgWG8yWajn8t5wtnu22w=s301-no?authuser=0" alt="profile picture" className={style.profilePic}></img>
                    <img src="https://lh3.googleusercontent.com/of6ezeyCtaz85AJzXXDoAh9181MXxgdR_Cf4W03F0BbmCTpVpIQee_eGROT48fYoWBOH4Nd0Qaq5telrqhRMv_pzMhpGIhU2XzFH-ABYmARj8IUhY1QcVCEWu7reV8u1vPwczKSbqi3R-cVb8G4xRjnqd6w5cumgKKSKIPUGTYfizXw-JtMHQ0sc29jSGrhJ5p6xEkr0afbb1oxN-PZ9WNXp9ftk8GtI5K-UbUKIn7SUEClxPYwUmf6g9p8u7CoWikNiLZmT3RceUJC3VwiPUxXB08TBBasc4c0Txr02T7QDgxpFsHnhqnNtQ3G-myJKHxL5yvRVx-JviFlLoRzB0LQESulpBCBkAu1jiwPpTqFmRyFE9iN6rr8RgbUyC_3hGYnMNh17HByx7GKTX01iijBFW9iweViQL1RsAJee6M0b6A5wCE5MXMoNBhz0ZjuNB1uhuLR1it6InyroENVT-IsOa3_HHBXjZXTMxOOSfamAzHSVGZdd-LVdZnRPKWzXOVKZLdlv5ARG9YCgrAAEEr8bnpBqy4nAJ8542tEj-h80lP75PshkWBLj4YCUoFzc25er7zoJMJ6VTJRMXMVP72j3KMJ7wc7kal05QBRgXtQDdEQrvm0pm8YlnDDuQh02J7TeZ9ZmVPDIjLI4Whpq0H8IYHqWkWk9MWc_81uhWgVxsDHwuZTMwOt82C6_7B8IJO_l45RiZ_y8Xy8wVEckeoGbIg=w241-h301-no?authuser=0" alt="profile picture" className={style.profilePic}></img>
                    <img src="https://lh3.googleusercontent.com/f3ZyeAajB2O-IHB9Xe2Gx1cO871iQPYfIFby__APa-mcyxDXOh2ARasvcDU10ZkTq5rBsfxMvwvFw1Y1okbWVFpvCoE9BL46FJESSY6EK4m9ldSc0Gsyi5iGvPOVUMRqHbE9vPE9CV_hXVytGPpUod2kYsjZbdkcvsOxf8LNU5JDnK70_nNLIPrQ8QY7oKdMuOPWnul94El59AA5YeBPbdug6QghYaaTVOI5BAERIxH2wN0ZFsaV_B4KSjL7nrk8YaXoXXhKm7mesnTRgyrShylpLlDjHX-K5ojyes1VvWfpXUtKYWBO0DSCIUdxJjegj6Oaf-5CiehShmfA6J1MgbNVv1f3mCpKM10AiVcOntacU8_eH56k1rV3KQkyHx3LhYEjQT34581Dhvg1GiYulw7dreLftj_t8OLYb_GECqenC27FzVGmuP3flzxZabUvBBV2LYvWDU1xfG3h0y4tJOrRojasWCXJb0RR0Jc8oB-GrOKPxkIMcGy3g3-b0g5tbSnx_uWM2xSLHWL6vUR1hDWULYJiNTg7YJX4jVXYVAMxx-IeDVgL61IDc1_cMjJiaMriij8YQ2LW-HqceSFFYEnZMD5hC9tpH7zFoUrkHBsNz4lUn_5OM8MJNo4svZTfPf90Ir_c1fnxDMqlWpS6F-Tz7f8urj-AcyUXvhcGe9kusvqkpskyHIL5TSme_L33XxMi2JO1lpUlMBy93lu168ePkQ=w261-h326-no?authuser=0" alt="profile picture" className={style.profilePic}></img>
                </div>
            </div>
            <div className={style.medicalReport}>
                    <h2 className={style.homepageTitle}>Buddy's Medical Report</h2>
                    <MedicalReportTabel/>
            <span className={style.seeAllWrapper}><a href="#" className={style.seeAllLink}>See all medical history</a></span>
            </div>

          
        </div>
    )
}
