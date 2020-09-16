export const IMAGES = {
    uploadedProfile: 'uploadedProfile',
    more: 'more',
    offer: 'offer',
    mongoDB: 'mongoDB',
    python: 'python',
    php: 'php',
    swift: 'swift',
    java: 'java',
    angular: 'angular',
    nodeJS: 'nodeJS',
    android: 'android',
    dashboard: 'dashboard',
    suitcase: 'suitcase',
    jobSearch: 'jobSearch',
    interview: 'interview',
    dashboard_active: 'dashboard_active',
    logo: 'logo'
  }
  
  export function getImageFromURL(url) {
    let iconName;
    switch (url) {
      case IMAGES.uploadedProfile:
        iconName = '/images/dashboard-assets/uploaded-profile.svg';
        break;
      case IMAGES.more:
        iconName = '/images/dashboard-assets/more_ico.png';
        break;
      case IMAGES.offer:
        iconName = '/images/dashboard-assets/offer-ico.svg';
        break;
      case IMAGES.mongoDB:
        iconName = '/images/dashboard-assets/mongodb_logo.png';
        break;
      case IMAGES.python:
        iconName = '/images/dashboard-assets/python_logo.png';
        break;
      case IMAGES.php:
        iconName = '/images/dashboard-assets/php_logo.png';
        break;
      case IMAGES.swift:
        iconName = '/images/dashboard-assets/swift_logo.png';
        break;
      case IMAGES.java:
        iconName = '/images/dashboard-assets/java_logo.jpg';
        break;
      case IMAGES.angular:
        iconName = '/images/dashboard-assets/angular_logo.png';
        break;
      case IMAGES.nodeJS:
        iconName = '/images/dashboard-assets/nodejs_logo.png';
        break;
      case IMAGES.android:
        iconName = '/images/dashboard-assets/android_logo.png';
        break;
      case IMAGES.dashboard:
        iconName = '/images/dashboard-assets/menu/dashboard.png';
        break;
      case IMAGES.dashboard_active:
        iconName = '/images/dashboard-assets/menu/dashboard_active.png';
        break;
      case IMAGES.jobSearch:
        iconName = '/images/dashboard-assets/menu/job-search.png';
        break;
      case IMAGES.suitcase:
        iconName = '/images/dashboard-assets/menu/suitcase.png';
        break;
      case IMAGES.interview:
        iconName = '/images/dashboard-assets/menu/interview.png';
        break;
      case IMAGES.logo:
        iconName = '/images/dashboard-assets/menu/logo.png';
        break;
      default:
        iconName = '/images/dashboard-assets/more_ico.png';
        break;
    }
    return iconName;
  }
  