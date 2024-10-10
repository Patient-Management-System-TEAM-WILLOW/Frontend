

import {BrowserRouter,Route,Routes} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import SignUp from './front-end/Component/SignUp';
import Header from './front-end/Component/Header'
import SignIn from './front-end/Component/SignIn';
import Dashboard from './front-end/Component/Dashboard';
import DoctorManagement from './front-end/DoctorManagement';
import Pateintmanagement from './front-end/Component/PateintMaangement';
import PatientReg from './front-end/Component/PatientReg';
import PateintLog from './front-end/Component/PateintLog';
import PatientDashboard from './front-end/Component/Pateintdashboard';

import AppointmentBook from './front-end/Component/ApointementBook';

import Prescription from './front-end/Component/Prescription';
import Bookappointement from './front-end/Component/Bookappointement';
import MonitorBilling from './front-end/Component/MonitorBilling';
import InsuranceBill from './front-end/Component/InsuranceBill';
import BillDetails from './front-end/Component/BillDetails';
import ReportAnalytics from './front-end/Component/ReportAnalytics';







function App() {
  return (
    <div className="App">
           <BrowserRouter>
         <Header/>
          <Routes>
                
                  <Route path="/" element={<SignUp/>} />
                  <Route path="/preg" element={<PatientReg/>} />
                  <Route path="/plog" element={<PateintLog/>} />
                  <Route path="/signin" element={<SignIn/>} />
                  <Route path="/home/:userId" element={<PatientDashboard/>} />
                  <Route path="p" element={<Prescription/>} />
                  <Route path="bookappointeme" element={<Bookappointement/>} />
                  <Route path="bills" element={<MonitorBilling/>} />
                  <Route path="ibills" element={<InsuranceBill/>} />
                  <Route path='detailbills' element={<BillDetails/>}/>
                  <Route path="/home/:userId" element={< Dashboard/>} />
                  <Route path="/apbooke" element={<AppointmentBook/>} />
                  <Route path="/reportan" element={<ReportAnalytics/>} />
                  <Route path="/doctormanagement" element={< DoctorManagement/>} />
                  <Route path="/patientmanagement" element={< Pateintmanagement/>} />
                 
                
                  
                 
                  
                  
          </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
