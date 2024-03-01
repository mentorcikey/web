import React from 'react'

import ConsultationForm from "../../components/home/ConsultationForm"
import FeedbackSlider from '../../components/home/FeedbackSlider'
import FrequentlyAskedQuestions from "../../components/course/FrequentlyAskedQuestions"
import CourseInfo from '../../components/course/CourseInfo'
import CourseSlider from '../../components/course/CourseSilder'

function CoursePage() {



    return (
        <>
            <div className="course-container">
                <CourseSlider />
                <CourseInfo />
                <ConsultationForm />
                <FeedbackSlider />
                <FrequentlyAskedQuestions />
            </div>
        </>

    )
}

export default CoursePage