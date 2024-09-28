# Small Arms Factory Complaint Management System

## Overview

This project is a **Complaint Management System** designed for the **Small Arms Factory**, under the **Ministry of Defence, Government of India**. The web application allows users to submit complaints related to different departments, while administrators can view, manage, and update the status of these complaints. The system is built using **Flask** for the back-end and **SQLite** for database management, ensuring a lightweight yet scalable solution.

## Features

- **User-Friendly Complaint Submission**: Users can submit complaints with relevant details such as name, email, contact number, department, complaint description, and priority level.
- **Complaint Status Tracking**: Complaints are categorized as "Waiting", "In-Progress", or "Completed", allowing administrators to easily track the progress of each complaint.
- **Admin Panel**: Administrators can view all complaints, filter by status, and update the status of complaints from the admin dashboard.
- **Responsive Design**: The web application is fully responsive, ensuring that it is accessible across a wide range of devices, including desktops, tablets, and mobile phones.
- **SQLite Database Integration**: All complaints are stored securely in an SQLite database, which can be queried and updated efficiently.

## Technology Stack

- **Back-End**: Flask (Python)
- **Database**: SQLite
- **Front-End**: HTML, CSS, JavaScript
- **ORM**: SQLAlchemy

## Folder Structure
. ├── static │ ├── css │ │ └── style.css # Custom CSS for styling ├── templates │ ├── index.html # Homepage template │ ├── complaints.html # Complaints viewing page │ ├── admin.html # Admin dashboard ├── app.py # Main application code ├── README.md # Project documentation ├── requirements.txt # Required Python dependencies ├── small_arms_factory.db # SQLite database file └── .gitignore # Git ignore file for sensitive files


## Installation and Setup

### Prerequisites

Ensure that you have the following installed on your local machine:
- **Python 3.x**
- **Pip** (Python package manager)


You can save this content in a `README.md` file in your project folder.


