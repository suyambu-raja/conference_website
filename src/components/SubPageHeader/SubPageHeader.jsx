import './SubPageHeader.css';
import headerBg from '../../assets/subpage_header.png';
import { Link } from 'react-router-dom';

const SubPageHeader = ({ title }) => {
  return (
    <div className="sub-header" style={{ backgroundImage: `url(${headerBg})` }}>
      <div className="sub-header__overlay"></div>
      <div className="sub-header__content">
        <h1 className="sub-header__title">{title}</h1>
        <div className="sub-header__breadcrumb">
          <Link to="/" className="breadcrumb-link">Home</Link>
          <span className="breadcrumb-separator">»</span>
          <span className="breadcrumb-current">{title}</span>
        </div>
      </div>
    </div>
  );
};

export default SubPageHeader;
