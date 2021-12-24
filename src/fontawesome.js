import { library } from '@fortawesome/fontawesome-svg-core';

// toda la libreria
import { faUserGraduate } from '@fortawesome/pro-light-svg-icons';
import { faImages } from '@fortawesome/pro-solid-svg-icons';
// solo los que interesan
import {
  faGithubAlt,
  faGoogle,
  faFacebook,
  faTwitter
} from '@fortawesome/free-brands-svg-icons';

library.add(
  faUserGraduate,
  faImages,
  faGithubAlt,
  faGoogle,
  faFacebook,
  faTwitter
);