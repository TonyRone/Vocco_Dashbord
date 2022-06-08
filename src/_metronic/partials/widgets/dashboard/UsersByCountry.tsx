/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useEffect, useState, Fragment} from 'react'
import {getusersbycountry} from './core/_requests'

type Props = {
  className: string,
}

type CountryData = {
  users_count: number,
  country: string
}

const UsersByCountry: React.FC<Props> = ({className}) => {

  const [usersCountryData, setUsersCountryData] = useState<Array<CountryData>>([]);
  const [totalUsers, setTotalUsers] = useState<number>(0);

  useEffect(() =>{
    const fetchData = async () => {
      const {data: res} = await getusersbycountry();
      setUsersCountryData(res.data);
      setTotalUsers(res.totalCount);
    }
    fetchData()
      .catch(console.error);
  }, [])

  return (
    <div className={`card ${className}`}>
      <div className="card-header pt-7 mb-5">
        <h3 className="card-title align-items-start flex-column">
          <span className="card-label fw-bolder text-gray-800">Users by Country</span>
        </h3>
        {/* <div className="card-toolbar">
          <a href="../../demo1/dist/apps/ecommerce/sales/listing.html" className="btn btn-sm btn-light">View All</a>
        </div> */}
      </div>
      <div
        className="card-body pt-0 scroll-y h-200px"
        data-kt-scroll='true'
        data-kt-scroll-activate='{default: false, lg: true}'
        data-kt-scroll-max-height='auto'
        data-kt-scroll-dependencies='#kt_header, #kt_toolbar, #kt_footer, #kt_chat_contacts_header'
        data-kt-scroll-wrappers='#kt_content, #kt_chat_contacts_body'
        data-kt-scroll-offset='0px'
      >
        {
          usersCountryData ? usersCountryData.map((eCountry, index) => {
            const flag = `${eCountry.country.toLowerCase().replace(" ", "-")}.svg`
            return (
              <Fragment key={index}>
                <div className="d-flex flex-stack">
                  <img src={`media/flags/${flag}`} className="me-4 w-25px" style={{borderRadius: "4px"}} alt="" />
                  <div className="d-flex flex-stack flex-row-fluid d-grid gap-2">
                    <div className="me-5">
                      <a href="#" className="text-gray-800 fw-bolder text-hover-primary fs-6">{eCountry.country}</a>
                    </div>
                    <div className="d-flex align-items-center">
                      <span className="text-gray-800 fw-bolder fs-6 me-3 d-block">
                        {eCountry.users_count}
                      </span>
                      <div className="m-0">
                        <span className="badge badge-success fs-base">
                          {
                            totalUsers ? Math.round((eCountry.users_count * 100 / totalUsers) * 100) / 100 : 0
                          }{"%"}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="separator separator-dashed my-3"></div>
              </Fragment>
            )
          }) : null
        }
      </div>
      {/* end::Body */}
    </div>
  )
}

export {UsersByCountry}
