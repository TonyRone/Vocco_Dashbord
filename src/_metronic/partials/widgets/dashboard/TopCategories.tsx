import React, {useEffect, useState} from 'react'
import {getTopCategoriesVocals} from './core/_requests'
import {VocalModel} from './core/_models'
import {TopCategoryVocalModel} from './core/_models'

type Props = {
  className: string,
}

const categories = [
  {
    category: "Fun",
    icon: "fun.png",
    href: "kt_stats_widget_2_tab_1"
  },
  {
    category: "Adults",
    icon: "adult.png",
    href: "kt_stats_widget_2_tab_2"
  },
  {
    category: "Education",
    icon: "education.png",
    href: "kt_stats_widget_2_tab_3"
  },
  {
    category: "Horror",
    icon: "horror.png",
    href: "kt_stats_widget_2_tab_4"
  },
  {
    category: "Transport",
    icon: "transport.png",
    href: "kt_stats_widget_2_tab_5"
  }
]

const TopCategories: React.FC<Props> = ({className}) => {

  const [topCategoryVocals, setTopCategoryVocals] = useState<TopCategoryVocalModel | null>(null)

  useEffect(() =>{
    const fetchData = async () => {
      const {data: res} = await getTopCategoriesVocals();
      setTopCategoryVocals(res);

      setTimeout(() => {
        fetchData()
          .catch(console.error);
      }, 7200000)
    }
    fetchData()
      .catch(console.error);

  }, [])

  return (
    <div className={`card ${className}`}>
      <div className="card-header align-items-center border-0">
        <h3 className="fw-bolder text-gray-900 m-0">Category statistics / Top Voice messages</h3>
      </div>
      <div className="card-body pt-2">
        <ul className="nav nav-pills nav-pills-custom mb-3">
          {
            topCategoryVocals ?
            topCategoryVocals.data.map((eCat, index) => {
              let category = eCat.category;
              if (category === "") category = "All";
              return (
                <li className="nav-item mb-3 me-3 me-lg-6" key={index}>
                  <a className={`nav-link d-flex justify-content-between flex-column flex-center overflow-hidden w-80px h-85px py-4 ${index === 0 ? "active" : ""}`} data-bs-toggle="pill" href={`#kt_stats_widget_2_tab_${index}`}>
                    <div className="nav-icon">
                      <img alt="" src={`/media/stock/categories/${category.toLowerCase()}.png`} className="" />
                    </div>
                    <span className="nav-text text-gray-700 fw-bolder fs-6 lh-1">{category}</span>
                    <span className="bullet-custom position-absolute bottom-0 w-100 h-4px bg-primary"></span>
                  </a>
                </li>
              )
            }) : null
          }
        </ul>
        <div className="tab-content">
          {
            topCategoryVocals? 
            topCategoryVocals.data.map((eCat, index) => {
              let category = eCat.category;
              if (category === "") category = "All";
              return (
                <div className={`tab-pane fade show ${index === 0 ? "active": ""}`} id={`kt_stats_widget_2_tab_${index}`} key={index}>
                  <div className="table-responsive">
                    <table className="table table-row-dashed align-middle gs-0 gy-4 my-0">
                      <thead>
                        <tr className="fs-7 fw-bolder text-gray-500 border-bottom-0">
                          <th className="ps-0 w-50px">VOCAL</th>
                          <th className="ps-0 w-100px"></th>
                          <th className="text-end min-w-140px">LIKES</th>
                          <th className="pe-0 text-end min-w-120px">ANSWERS</th>
                          <th className="pe-0 text-end min-w-120px">SHARES</th>
                        </tr>
                      </thead>
                      <tbody>
                        {
                          eCat.data.map((eVocal: VocalModel, index: number) => {
                            return (
                              <tr key={index}>
                                <td>
                                  <img src="media/stock/ecommerce/56.gif" className="w-50px ms-n1" alt="" />
                                </td>
                                <td className="ps-0">
                                  <span className="text-gray-800 fw-bolder text-hover-primary mb-1 fs-6 text-start pe-0">{eVocal.title}</span>
                                  <span className="text-gray-400 fw-bold fs-7 d-block text-start ps-0">{eVocal.user.name}</span>
                                </td>
                                <td>
                                  <span className="text-gray-800 fw-bolder d-block fs-6 ps-0 text-end">{eVocal.likesCount}</span>
                                </td>
                                <td className="text-end pe-0">
                                  <span className="text-gray-800 fw-bolder d-block fs-6">{eVocal.answersCount}</span>
                                </td>
                                <td className="text-end pe-0">
                                  <span className="text-gray-800 fw-bolder d-block fs-6">{0}</span>
                                </td>
                              </tr>
                            )
                          })
                        }
                      </tbody>
                    </table>
                  </div>
                </div>
              )
            }) : null
          }
        </div>
      </div>
    </div>
  )
}

export {TopCategories}
