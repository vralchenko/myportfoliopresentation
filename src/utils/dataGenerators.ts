export const generateRandomData = () => {
    const year = Math.floor(Math.random() * (2000 - 1970 + 1)) + 1970;
    const month = Math.floor(Math.random() * 12) + 1;
    const day = Math.floor(Math.random() * 28) + 1;
    const hour = Math.floor(Math.random() * 24);
    const minute = Math.floor(Math.random() * 60);
    const cities = [
        'Chernihiv, Ukraine', 'Kyiv, Ukraine', 'London, UK', 'New York, USA', 'Tokyo, Japan', 'Paris, France',
        'Berlin, Germany', 'Rome, Italy', 'Sydney, Australia', 'Madrid, Spain',
        'Toronto, Canada', 'Warsaw, Poland', 'Dubai, UAE', 'Seoul, South Korea'
    ];
    return {
        date: `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`,
        time: `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`,
        place: cities[Math.floor(Math.random() * cities.length)],
        gender: Math.random() > 0.5 ? 'male' : 'female'
    };
}

export const generateBizLingoData = () => {
    return {
        p1: {
            source: "Нам следует изучить возможности больших языковых моделей для улучшения поддержки клиентов.",
            exact: "We should explore LLM capabilities to improve customer support."
        },
        p2: {
            source: "Использование машинного обучения поможет нам предсказывать поведение пользователей.",
            approx: "Usage of machine learning help us predict behavior of users.",
            exact: "Using machine learning will help us predict user behavior."
        },
        p3: {
            source: "Интеграция ИИ в наш рабочий процесс позволит автоматизировать рутинные задачи кодирования.",
            approx: "Integration AI in our work process will let us to automate routine tasks of coding.",
            exact: "Integrating AI into our workflow will automate routine coding tasks."
        }
    };
}

export const generateCareerCoachData = () => {
    const jobs = [
        'https://www.linkedin.com/jobs/view/4372746415',
        'https://www.linkedin.com/jobs/view/4323227240',
        'https://www.linkedin.com/jobs/view/4365572854',
        'https://www.linkedin.com/jobs/view/4326454749'
    ];
    return {
        jobUrl: jobs[Math.floor(Math.random() * jobs.length)]
    };
}
