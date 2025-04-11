// Theme Switcher
document.getElementById('theme-switcher').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});

// Example of dynamically populating course list
const courseList = document.getElementById('course-list');
const courses = [
    { name: 'Mathematics' },
    { name: 'Science' },
    { name: 'English' }
];

courses.forEach(course => {
    const li = document.createElement('li');
    li.textContent = course.name;
    courseList.appendChild(li);
});

// Example of dynamically populating lesson status
const lessonBody = document.getElementById('lesson-body');
const lessons = [
    { course: 'Mathematics', completed: 5, total: 10 },
    { course: 'Science', completed: 3, total: 8 },
    { course: 'English', completed: 7, total: 12 }
];

lessons.forEach(lesson => {
    const row = document.createElement('tr');
    const courseCell = document.createElement('td');
    courseCell.textContent = lesson.course;
    row.appendChild(courseCell);

    const completedCell = document.createElement('td');
    completedCell.textContent = `${lesson.completed}/${lesson.total}`;
    row.appendChild(completedCell);

    const totalCell = document.createElement('td');
    totalCell.textContent = lesson.total;
    row.appendChild(totalCell);

    lessonBody.appendChild(row);
});

// Example of dynamically populating quiz list
const quizList = document.getElementById('quiz-list');
const quizzes = [
    { name: 'Math Quiz', date: '2025-04-15' },
    { name: 'Science Quiz', date: '2025-04-20' },
    { name: 'English Quiz', date: '2025-04-25' }
];

quizzes.forEach(quiz => {
    const li = document.createElement('li');
    li.textContent = `${quiz.name} - ${quiz.date}`;
    quizList.appendChild(li);
});

// Example of setting reminders
document.getElementById('reminder-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const reminderDate = document.getElementById('reminder-date').value;
    const reminderNote = document.getElementById('reminder-note').value;
    console.log(`Reminder set for ${reminderDate}: ${reminderNote}`);
    // Implement logic to save reminders
});

// Example of updating overall progress summary
const progressSummary = document.getElementById('progress-summary');
const overallProgress = '75%'; // Example progress value
progressSummary.textContent = `Your overall progress is ${overallProgress}`;
