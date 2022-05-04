/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

type Props = {
  className: string,
}

const UsersByCountry: React.FC<Props> = ({className}) => {

  return (
    <div className={`card ${className}`}>
      {/* begin::Header */}
      <div className="card-header pt-7 mb-5">
        {/* begin::Title */}
        <h3 className="card-title align-items-start flex-column">
          <span className="card-label fw-bolder text-gray-800">Users by Country</span>
          <span className="text-gray-400 mt-1 fw-bold fs-6">20 countries share 97% Users</span>
        </h3>
        {/* end::Title */}
        {/* begin::Toolbar */}
        <div className="card-toolbar">
          <a href="../../demo1/dist/apps/ecommerce/sales/listing.html" className="btn btn-sm btn-light">View All</a>
        </div>
        {/* end::Toolbar */}
      </div>
      {/* end::Header */}
      {/* begin::Body */}
      <div className="card-body pt-0">
        {/* begin::Item */}
        <div className="d-flex flex-stack">
          {/* begin::Flag */}
          <img src="media/flags/united-states.svg" className="me-4 w-25px" style={{borderRadius: "4px"}} alt="" />
          {/* end::Flag */}
          {/* begin::Section */}
          <div className="d-flex flex-stack flex-row-fluid d-grid gap-2">
            {/* begin::Content */}
            <div className="me-5">
              {/* begin::Title */}
              <a href="#" className="text-gray-800 fw-bolder text-hover-primary fs-6">United States</a>
              {/* end::Title */}
            </div>
            {/* end::Content */}
            {/* begin::Info */}
            <div className="d-flex align-items-center">
              {/* begin::Number */}
              <span className="text-gray-800 fw-bolder fs-6 me-3 d-block">9,763</span>
              {/* end::Number */}
              {/* begin::Label */}
              <div className="m-0">
                {/* begin::Label */}
                <span className="badge badge-success fs-base">
                {/* begin::Svg Icon | path: icons/duotune/arrows/arr066.svg */}
                <span className="svg-icon svg-icon-5 svg-icon-white ms-n1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <rect opacity="0.5" x="13" y="6" width="13" height="2" rx="1" transform="rotate(90 13 6)" fill="currentColor" />
                    <path d="M12.5657 8.56569L16.75 12.75C17.1642 13.1642 17.8358 13.1642 18.25 12.75C18.6642 12.3358 18.6642 11.6642 18.25 11.25L12.7071 5.70711C12.3166 5.31658 11.6834 5.31658 11.2929 5.70711L5.75 11.25C5.33579 11.6642 5.33579 12.3358 5.75 12.75C6.16421 13.1642 6.83579 13.1642 7.25 12.75L11.4343 8.56569C11.7467 8.25327 12.2533 8.25327 12.5657 8.56569Z" fill="currentColor" />
                  </svg>
                </span>
                {/* end::Svg Icon */}2.6%</span>
                {/* end::Label */}
              </div>
              {/* end::Label */}
            </div>
            {/* end::Info */}
          </div>
          {/* end::Section */}
        </div>
        {/* end::Item */}
        {/* begin::Separator */}
        <div className="separator separator-dashed my-3"></div>
        {/* end::Separator */}
        {/* begin::Item */}
        <div className="d-flex flex-stack">
          {/* begin::Flag */}
          <img src="media/flags/brazil.svg" className="me-4 w-25px" style={{borderRadius: "4px"}} alt="" />
          {/* end::Flag */}
          {/* begin::Section */}
          <div className="d-flex flex-stack flex-row-fluid d-grid gap-2">
            {/* begin::Content */}
            <div className="me-5">
              {/* begin::Title */}
              <a href="#" className="text-gray-800 fw-bolder text-hover-primary fs-6">Brasil</a>
              {/* end::Title */}
            </div>
            {/* end::Content */}
            {/* begin::Info */}
            <div className="d-flex align-items-center">
              {/* begin::Number */}
              <span className="text-gray-800 fw-bolder fs-6 me-3 d-block">4,062</span>
              {/* end::Number */}
              {/* begin::Label */}
              <div className="m-0">
                {/* begin::Label */}
                <span className="badge badge-danger fs-base">
                {/* begin::Svg Icon | path: icons/duotune/arrows/arr065.svg */}
                <span className="svg-icon svg-icon-5 svg-icon-white ms-n1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <rect opacity="0.5" x="11" y="18" width="13" height="2" rx="1" transform="rotate(-90 11 18)" fill="currentColor" />
                    <path d="M11.4343 15.4343L7.25 11.25C6.83579 10.8358 6.16421 10.8358 5.75 11.25C5.33579 11.6642 5.33579 12.3358 5.75 12.75L11.2929 18.2929C11.6834 18.6834 12.3166 18.6834 12.7071 18.2929L18.25 12.75C18.6642 12.3358 18.6642 11.6642 18.25 11.25C17.8358 10.8358 17.1642 10.8358 16.75 11.25L12.5657 15.4343C12.2533 15.7467 11.7467 15.7467 11.4343 15.4343Z" fill="currentColor" />
                  </svg>
                </span>
                {/* end::Svg Icon */}0.4%</span>
                {/* end::Label */}
              </div>
              {/* end::Label */}
            </div>
            {/* end::Info */}
          </div>
          {/* end::Section */}
        </div>
        {/* end::Item */}
        {/* begin::Separator */}
        <div className="separator separator-dashed my-3"></div>
        {/* end::Separator */}
        {/* begin::Item */}
        <div className="d-flex flex-stack">
          {/* begin::Flag */}
          <img src="media/flags/turkey.svg" className="me-4 w-25px" style={{borderRadius: "4px"}} alt="" />
          {/* end::Flag */}
          {/* begin::Section */}
          <div className="d-flex flex-stack flex-row-fluid d-grid gap-2">
            {/* begin::Content */}
            <div className="me-5">
              {/* begin::Title */}
              <a href="#" className="text-gray-800 fw-bolder text-hover-primary fs-6">Turkey</a>
              {/* end::Title */}
            </div>
            {/* end::Content */}
            {/* begin::Info */}
            <div className="d-flex align-items-center">
              {/* begin::Number */}
              <span className="text-gray-800 fw-bolder fs-6 me-3 d-block">1,680</span>
              {/* end::Number */}
              {/* begin::Label */}
              <div className="m-0">
                {/* begin::Label */}
                <span className="badge badge-success fs-base">
                {/* begin::Svg Icon | path: icons/duotune/arrows/arr066.svg */}
                <span className="svg-icon svg-icon-5 svg-icon-white ms-n1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <rect opacity="0.5" x="13" y="6" width="13" height="2" rx="1" transform="rotate(90 13 6)" fill="currentColor" />
                    <path d="M12.5657 8.56569L16.75 12.75C17.1642 13.1642 17.8358 13.1642 18.25 12.75C18.6642 12.3358 18.6642 11.6642 18.25 11.25L12.7071 5.70711C12.3166 5.31658 11.6834 5.31658 11.2929 5.70711L5.75 11.25C5.33579 11.6642 5.33579 12.3358 5.75 12.75C6.16421 13.1642 6.83579 13.1642 7.25 12.75L11.4343 8.56569C11.7467 8.25327 12.2533 8.25327 12.5657 8.56569Z" fill="currentColor" />
                  </svg>
                </span>
                {/* end::Svg Icon */}0.2%</span>
                {/* end::Label */}
              </div>
              {/* end::Label */}
            </div>
            {/* end::Info */}
          </div>
          {/* end::Section */}
        </div>
        {/* end::Item */}
        {/* begin::Separator */}
        <div className="separator separator-dashed my-3"></div>
        {/* end::Separator */}
        {/* begin::Item */}
        <div className="d-flex flex-stack">
          {/* begin::Flag */}
          <img src="media/flags/france.svg" className="me-4 w-25px" style={{borderRadius: "4px"}} alt="" />
          {/* end::Flag */}
          {/* begin::Section */}
          <div className="d-flex flex-stack flex-row-fluid d-grid gap-2">
            {/* begin::Content */}
            <div className="me-5">
              {/* begin::Title */}
              <a href="#" className="text-gray-800 fw-bolder text-hover-primary fs-6">France</a>
              {/* end::Title */}
            </div>
            {/* end::Content */}
            {/* begin::Info */}
            <div className="d-flex align-items-center">
              {/* begin::Number */}
              <span className="text-gray-800 fw-bolder fs-6 me-3 d-block">849</span>
              {/* end::Number */}
              {/* begin::Label */}
              <div className="m-0">
                {/* begin::Label */}
                <span className="badge badge-success fs-base">
                {/* begin::Svg Icon | path: icons/duotune/arrows/arr066.svg */}
                <span className="svg-icon svg-icon-5 svg-icon-white ms-n1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <rect opacity="0.5" x="13" y="6" width="13" height="2" rx="1" transform="rotate(90 13 6)" fill="currentColor" />
                    <path d="M12.5657 8.56569L16.75 12.75C17.1642 13.1642 17.8358 13.1642 18.25 12.75C18.6642 12.3358 18.6642 11.6642 18.25 11.25L12.7071 5.70711C12.3166 5.31658 11.6834 5.31658 11.2929 5.70711L5.75 11.25C5.33579 11.6642 5.33579 12.3358 5.75 12.75C6.16421 13.1642 6.83579 13.1642 7.25 12.75L11.4343 8.56569C11.7467 8.25327 12.2533 8.25327 12.5657 8.56569Z" fill="currentColor" />
                  </svg>
                </span>
                {/* end::Svg Icon */}4.1%</span>
                {/* end::Label */}
              </div>
              {/* end::Label */}
            </div>
            {/* end::Info */}
          </div>
          {/* end::Section */}
        </div>
        {/* end::Item */}
        {/* begin::Separator */}
        <div className="separator separator-dashed my-3"></div>
        {/* end::Separator */}
        {/* begin::Item */}
        <div className="d-flex flex-stack">
          {/* begin::Flag */}
          <img src="media/flags/india.svg" className="me-4 w-25px" style={{borderRadius: "4px"}} alt="" />
          {/* end::Flag */}
          {/* begin::Section */}
          <div className="d-flex flex-stack flex-row-fluid d-grid gap-2">
            {/* begin::Content */}
            <div className="me-5">
              {/* begin::Title */}
              <a href="#" className="text-gray-800 fw-bolder text-hover-primary fs-6">India</a>
              {/* end::Title */}
            </div>
            {/* end::Content */}
            {/* begin::Info */}
            <div className="d-flex align-items-center">
              {/* begin::Number */}
              <span className="text-gray-800 fw-bolder fs-6 me-3 d-block">604</span>
              {/* end::Number */}
              {/* begin::Label */}
              <div className="m-0">
                {/* begin::Label */}
                <span className="badge badge-danger fs-base">
                {/* begin::Svg Icon | path: icons/duotune/arrows/arr065.svg */}
                <span className="svg-icon svg-icon-5 svg-icon-white ms-n1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <rect opacity="0.5" x="11" y="18" width="13" height="2" rx="1" transform="rotate(-90 11 18)" fill="currentColor" />
                    <path d="M11.4343 15.4343L7.25 11.25C6.83579 10.8358 6.16421 10.8358 5.75 11.25C5.33579 11.6642 5.33579 12.3358 5.75 12.75L11.2929 18.2929C11.6834 18.6834 12.3166 18.6834 12.7071 18.2929L18.25 12.75C18.6642 12.3358 18.6642 11.6642 18.25 11.25C17.8358 10.8358 17.1642 10.8358 16.75 11.25L12.5657 15.4343C12.2533 15.7467 11.7467 15.7467 11.4343 15.4343Z" fill="currentColor" />
                  </svg>
                </span>
                {/* end::Svg Icon */}8.3%</span>
                {/* end::Label */}
              </div>
              {/* end::Label */}
            </div>
            {/* end::Info */}
          </div>
          {/* end::Section */}
        </div>
        {/* end::Item */}
        {/* begin::Separator */}
        <div className="separator separator-dashed my-3"></div>
        {/* end::Separator */}
        {/* begin::Item */}
        <div className="d-flex flex-stack">
          {/* begin::Flag */}
          <img src="media/flags/sweden.svg" className="me-4 w-25px" style={{borderRadius: "4px"}} alt="" />
          {/* end::Flag */}
          {/* begin::Section */}
          <div className="d-flex flex-stack flex-row-fluid d-grid gap-2">
            {/* begin::Content */}
            <div className="me-5">
              {/* begin::Title */}
              <a href="#" className="text-gray-800 fw-bolder text-hover-primary fs-6">Sweden</a>
              {/* end::Title */}
            </div>
            {/* end::Content */}
            {/* begin::Info */}
            <div className="d-flex align-items-center">
              {/* begin::Number */}
              <span className="text-gray-800 fw-bolder fs-6 me-3 d-block">237</span>
              {/* end::Number */}
              {/* begin::Label */}
              <div className="m-0">
                {/* begin::Label */}
                <span className="badge badge-success fs-base">
                {/* begin::Svg Icon | path: icons/duotune/arrows/arr066.svg */}
                <span className="svg-icon svg-icon-5 svg-icon-white ms-n1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <rect opacity="0.5" x="13" y="6" width="13" height="2" rx="1" transform="rotate(90 13 6)" fill="currentColor" />
                    <path d="M12.5657 8.56569L16.75 12.75C17.1642 13.1642 17.8358 13.1642 18.25 12.75C18.6642 12.3358 18.6642 11.6642 18.25 11.25L12.7071 5.70711C12.3166 5.31658 11.6834 5.31658 11.2929 5.70711L5.75 11.25C5.33579 11.6642 5.33579 12.3358 5.75 12.75C6.16421 13.1642 6.83579 13.1642 7.25 12.75L11.4343 8.56569C11.7467 8.25327 12.2533 8.25327 12.5657 8.56569Z" fill="currentColor" />
                  </svg>
                </span>
                {/* end::Svg Icon */}1.9%</span>
                {/* end::Label */}
              </div>
              {/* end::Label */}
            </div>
            {/* end::Info */}
          </div>
          {/* end::Section */}
        </div>
        {/* begin::Separator */}
        <div className="separator separator-dashed my-3"></div>
        {/* end::Separator */}
        {/* begin::Item */}
        <div className="d-flex flex-stack">
          {/* begin::Flag */}
          <img src="media/flags/canada.svg" className="me-4 w-25px" style={{borderRadius: "4px"}} alt="" />
          {/* end::Flag */}
          {/* begin::Section */}
          <div className="d-flex flex-stack flex-row-fluid d-grid gap-2">
            {/* begin::Content */}
            <div className="me-5">
              {/* begin::Title */}
              <a href="#" className="text-gray-800 fw-bolder text-hover-primary fs-6">Canada</a>
              {/* end::Title */}
            </div>
            {/* end::Content */}
            {/* begin::Info */}
            <div className="d-flex align-items-center">
              {/* begin::Number */}
              <span className="text-gray-800 fw-bolder fs-6 me-3 d-block">237</span>
              {/* end::Number */}
              {/* begin::Label */}
              <div className="m-0">
                {/* begin::Label */}
                <span className="badge badge-success fs-base">
                {/* begin::Svg Icon | path: icons/duotune/arrows/arr066.svg */}
                <span className="svg-icon svg-icon-5 svg-icon-white ms-n1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <rect opacity="0.5" x="13" y="6" width="13" height="2" rx="1" transform="rotate(90 13 6)" fill="currentColor" />
                    <path d="M12.5657 8.56569L16.75 12.75C17.1642 13.1642 17.8358 13.1642 18.25 12.75C18.6642 12.3358 18.6642 11.6642 18.25 11.25L12.7071 5.70711C12.3166 5.31658 11.6834 5.31658 11.2929 5.70711L5.75 11.25C5.33579 11.6642 5.33579 12.3358 5.75 12.75C6.16421 13.1642 6.83579 13.1642 7.25 12.75L11.4343 8.56569C11.7467 8.25327 12.2533 8.25327 12.5657 8.56569Z" fill="currentColor" />
                  </svg>
                </span>
                {/* end::Svg Icon */}1.9%</span>
                {/* end::Label */}
              </div>
              {/* end::Label */}
            </div>
            {/* end::Info */}
          </div>
          {/* end::Section */}
        </div>
        {/* end::Item */}
        {/* begin::Separator */}
        <div className="separator separator-dashed my-3"></div>
        {/* end::Separator */}
        {/* begin::Item */}
        <div className="d-flex flex-stack">
          {/* begin::Flag */}
          <img src="media/flags/italy.svg" className="me-4 w-25px" style={{borderRadius: "4px"}} alt="" />
          {/* end::Flag */}
          {/* begin::Section */}
          <div className="d-flex flex-stack flex-row-fluid d-grid gap-2">
            {/* begin::Content */}
            <div className="me-5">
              {/* begin::Title */}
              <a href="#" className="text-gray-800 fw-bolder text-hover-primary fs-6">Italy</a>
              {/* end::Title */}
            </div>
            {/* end::Content */}
            {/* begin::Info */}
            <div className="d-flex align-items-center">
              {/* begin::Number */}
              <span className="text-gray-800 fw-bolder fs-6 me-3 d-block">237</span>
              {/* end::Number */}
              {/* begin::Label */}
              <div className="m-0">
                {/* begin::Label */}
                <span className="badge badge-success fs-base">
                {/* begin::Svg Icon | path: icons/duotune/arrows/arr066.svg */}
                <span className="svg-icon svg-icon-5 svg-icon-white ms-n1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <rect opacity="0.5" x="13" y="6" width="13" height="2" rx="1" transform="rotate(90 13 6)" fill="currentColor" />
                    <path d="M12.5657 8.56569L16.75 12.75C17.1642 13.1642 17.8358 13.1642 18.25 12.75C18.6642 12.3358 18.6642 11.6642 18.25 11.25L12.7071 5.70711C12.3166 5.31658 11.6834 5.31658 11.2929 5.70711L5.75 11.25C5.33579 11.6642 5.33579 12.3358 5.75 12.75C6.16421 13.1642 6.83579 13.1642 7.25 12.75L11.4343 8.56569C11.7467 8.25327 12.2533 8.25327 12.5657 8.56569Z" fill="currentColor" />
                  </svg>
                </span>
                {/* end::Svg Icon */}1.9%</span>
                {/* end::Label */}
              </div>
              {/* end::Label */}
            </div>
            {/* end::Info */}
          </div>
          {/* end::Section */}
        </div>
        {/* end::Item */}
        
      </div>
      {/* end::Body */}
    </div>
  )
}

export {UsersByCountry}
