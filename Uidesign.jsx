import React from 'react';
import './Ui.css'
import Container from 'react-bootstrap/Container';
import * as Io5Icons from 'react-icons/io5';
import * as FaIcons from 'react-icons/fa'
import * as BsIcons from 'react-icons/bs'
import * as TbIcons from 'react-icons/tb'
import * as MdIcons from 'react-icons/md'
import * as CgIcons from 'react-icons/cg'
import * as ImIcons from 'react-icons/im'

function Leads() {
  return (
    <Container>
    <div className='design'>
        <div className='logo'></div>
        <div className='top-right-settings'><Io5Icons.IoSettingsSharp style={{height:'20px', width:'20px'}}/></div>
        <div className='admin'>
            <div className='admin-photo'></div>
            <h4>Nithin josh</h4>
           <p style={{fontSize:'14px'}}> Welcome</p>
        </div>
        <div className="top-right-bell"><FaIcons.FaBell style={{height:'20px', width:'20px'}} /> </div>
        <div className='content'>
            <div className="top-blue">
                <div className="blue-innerbox" style={{marginLeft:'230px'}}>
                    <div className="blue-circle"><BsIcons.BsFillJournalBookmarkFill style={{height:'20px', width:'20px'}} /></div>
              <h4 style={{float:'left'}}>Leads</h4><br/>
              <p style={{fontSize:'12px', float:'left'}}>12 leads are pending</p>
                </div>
                <div className="blue-innerbox">
                <div className="blue-circle"><TbIcons.TbBuilding  style={{height:'20px', width:'20px'}} /></div>
                <h4 style={{float:'left'}}>Accounts</h4><br/>
              <p style={{fontSize:'12px', float:'left'}}>10 active accounts</p>
                </div>
                <div className="blue-innerbox">
                <div className="blue-circle"><MdIcons.MdContacts  style={{height:'20px', width:'20px'}} /></div>
                <h4 style={{float:'left'}}>Contacts</h4><br/>
              <p style={{fontSize:'12px', float:'left'}}>10 active users</p>
                </div>
                <div className="blue-innerbox">
                <div className="blue-circle"><TbIcons.TbClockExclamation  style={{height:'20px', width:'20px'}} /></div>
                <h4 style={{float:'left'}}>Tasks</h4><br/>
              <p style={{fontSize:'12px', float:'left'}}>25 tasks are pending</p>
                </div>
            </div>
            <div className='leads'>
      <h1 style={{color:'rgb(0, 119, 255)', float:'left'}} >All leads</h1><br/><br/>
      <p className='para'>From 20 September to 20 December 2021</p>
      <div className='add'> <MdIcons.MdAddCircleOutline style={{fontSize:'20px', marginTop:'5px', float:'left', marginRight:'10px'}} /> Add new </div>
      <BsIcons.BsShareFill className='share-icon' />
      <input type="search" placeholder="Search a lead..." className='search' />
      <table>
        <thead>
          <tr>
            <th>Company details</th>
            <th>Contact person</th>
            <th>Contacts</th>
            <th>Project tag</th>
            <th>Status</th>
            <th>Tasks</th>
            <th>Follow-up date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Try jobs private limited</td>
            <td>Ramcharan</td>
            <td>9800465478</td>
            <td>CRM</td>
            <td>New</td>
            <td>110</td>
            <td>20 Jan 2022</td>
            <td><CgIcons.CgPhone /> <ImIcons.ImFileText /> <BsIcons.BsThreeDotsVertical /> </td>
          </tr>
          <tr>
            <td>Aagnia Technology private limited</td>
            <td>Karthikeyan</td>
            <td>9800465478</td>
            <td>Ecommerce</td>
            <td>New</td>
            <td>10</td>
            <td>25 Jan 2022</td>
            <td><CgIcons.CgPhone /> <ImIcons.ImFileText /> <BsIcons.BsThreeDotsVertical /> </td>
          </tr>
          <tr>
            <td>Try jobs private limited</td>
            <td>Ramcharan</td>
            <td>9600465478</td>
            <td>CRM</td>
            <td>Hot</td>
            <td>10</td>
            <td>20 Jan 2022</td>
            <td><CgIcons.CgPhone /> <ImIcons.ImFileText /> <BsIcons.BsThreeDotsVertical /> </td>
          </tr>
          <tr>
            <td>Aagnia Technology private limited</td>
            <td>Karthikeyan</td>
            <td>9800465478</td>
            <td>Ecommerce</td>
            <td>Lost</td>
            <td>10</td>
            <td>25 Jan 2022</td>
            <td><CgIcons.CgPhone /> <ImIcons.ImFileText /> <BsIcons.BsThreeDotsVertical /> </td>
          </tr>
          <tr>
            <td>Try jobs private limited</td>
            <td>Ramcharan</td>
            <td>9800465478</td>
            <td>CRM</td>
            <td>Won</td>
            <td>10</td>
            <td>20 Jan 2022</td>
            <td><CgIcons.CgPhone /> <ImIcons.ImFileText /> <BsIcons.BsThreeDotsVertical /> </td>
          </tr>
          <tr>
            <td>Aagnia Technology private limited</td>
            <td>Karthikeyan</td>
            <td>9800465478</td>
            <td>Ecommerce</td>
            <td>New</td>
            <td>10</td>
            <td>25 Jan 2022</td>
            <td><CgIcons.CgPhone /> <ImIcons.ImFileText /> <BsIcons.BsThreeDotsVertical /> </td>
          </tr>
          <tr>
            <td>Try jobs private limited</td>
            <td>Ramcharan</td>
            <td>9800465478</td>
            <td>CRM</td>
            <td>Hot</td>
            <td>10</td>
            <td>20 Jan 2022</td>
            <td><CgIcons.CgPhone /> <ImIcons.ImFileText /> <BsIcons.BsThreeDotsVertical /> </td>
          </tr>
          <tr>
            <td>Aagnia Technology private limited</td>
            <td>Karthikeyan</td>
            <td>9800465478</td>
            <td>Ecommerce</td>
            <td>Lost</td>
            <td>10</td>
            <td>25 Jan 2022</td>
            <td><CgIcons.CgPhone /> <ImIcons.ImFileText /> <BsIcons.BsThreeDotsVertical /> </td>
          </tr>
          <tr>
            <td>Try jobs private limited</td>
            <td>Ramcharan</td>
            <td>9800465478</td>
            <td>CRM</td>
            <td>Won</td>
            <td>10</td>
            <td>20 Jan 2022</td>
            <td><CgIcons.CgPhone /> <ImIcons.ImFileText /> <BsIcons.BsThreeDotsVertical /> </td>
          </tr>
          <tr>
            <td>Aagnia Technology private limited</td>
            <td>Karthikeyan</td>
            <td>9800465478</td>
            <td>Ecommerce</td>
            <td>New</td>
            <td>10</td>
            <td>25 Jan 2022</td>
            <td><CgIcons.CgPhone /> <ImIcons.ImFileText /> <BsIcons.BsThreeDotsVertical /> </td>
          </tr>
        </tbody>
      </table>
      </div>
      </div>
    </div>
    </Container>
  );
}

export default Leads;