import "@splidejs/react-splide/css"

import { Splide, SplideSlide } from "@splidejs/react-splide"
import classnames from "classnames"
import type { FC, ReactNode } from "react"
import { useState } from "react"

const Date: FC<{ children: ReactNode; hover?: boolean }> = ({
  children,
  hover = false
}) => {
  return (
    <SplideSlide
      className={classnames(
        "w-[20px] pt-80 text-center",
        hover && "text-white"
      )}
    >
      {children}
    </SplideSlide>
  )
}

const Index = () => {
  const [select, setSelect] = useState(4)

  return (
    <div className="min-h-screen w-full bg-gray-200 text-gray-900">
      <div className="fixed top-0 left-0 z-[24] flex min-h-screen w-[232px] flex-col bg-gray-100 bg-opacity-60 py-36 pl-14">
        <h1 className="text-7xl font-medium">Timeline</h1>
        <h2 className="ml-4 mt-10 text-2xl font-medium">april</h2>
      </div>
      <div className="fixed top-0 left-[232px] z-[19] flex h-[260px] w-[24px] flex-col border-r border-black bg-gray-100 bg-opacity-60"></div>
      <div className="fixed top-[260px] left-[232px] z-[19] flex h-[100px] w-[24px] flex-col border-r border-black bg-gray-100 bg-opacity-60"></div>
      <div
        style={{ clipPath: "inset(360px 0 0 0)" }}
        className="fixed top-0 left-[232px] z-[24] flex min-h-screen w-[24px] flex-col border-r border-black bg-gray-100 bg-opacity-60"
      ></div>
      <div className="absolute left-56 top-72 z-[20] mt-5 ml-2 h-12 w-12 rounded-full bg-gray-900" />
      <div className="min-h-screen">
        <Splide
          options={{
            gap: "2.75rem",
            autoWidth: true,
            arrows: false,
            height: "100vh",
            snap: true,
            pagination: false,
            padding: { left: 246 },
            trimSpace: false,
            start: select,
            direction: "ltr",
            focus: 0
          }}
          onMove={(s, i) => {
            setSelect(i)
          }}
          className="z-20 min-h-screen space-x-11 font-medium text-gray-400"
        >
          <Date>
            <span
              className={classnames(
                select === 0 ? "text-white" : "text-gray-400"
              )}
            >
              16
            </span>
          </Date>
          <Date>
            <div className="relative">
              <span
                className={classnames(
                  select === 1 ? "text-white" : "text-gray-400"
                )}
              >
                17
              </span>
              <div className="absolute top-16 w-max min-w-[400px] rounded-lg bg-green-50 p-5 text-left shadow-lg">
                <h1 className="text-gray-900">Task description</h1>
              </div>
            </div>
          </Date>
          <Date>
            <div className="relative">
              <h2 className="absolute -top-6 text-xs text-gray-500">tue</h2>
              <span
                className={classnames(
                  select === 2 ? "text-white" : "text-gray-900"
                )}
              >
                18
              </span>
            </div>
          </Date>
          <Date>
            <span
              className={classnames(
                select === 3 ? "text-white" : "text-gray-400"
              )}
            >
              19
            </span>
          </Date>
          <Date>
            <div className="relative">
              <h2 className="absolute -top-6 text-xs text-gray-500">thu</h2>
              <span
                className={classnames(
                  select === 4 ? "text-white" : "text-gray-900"
                )}
              >
                20
              </span>
              <div className="absolute top-36 w-max min-w-[400px] rounded-lg bg-green-50 p-5 text-left shadow-lg">
                <h1 className="text-gray-900">Task description</h1>
              </div>
              <div className="absolute top-56 w-max min-w-[100px] rounded-lg bg-red-50 p-5 text-left shadow-lg">
                <h1 className="text-gray-900">Task small</h1>
              </div>
            </div>
          </Date>
          <Date>
            <span
              className={classnames(
                select === 5 ? "text-white" : "text-gray-400"
              )}
            >
              21
            </span>
          </Date>
          <Date>
            <span
              className={classnames(
                select === 6 ? "text-white" : "text-gray-400"
              )}
            >
              22
            </span>
          </Date>
          <Date>
            <span
              className={classnames(
                select === 7 ? "text-white" : "text-gray-400"
              )}
            >
              23
            </span>
          </Date>
          <Date>
            <div className="relative">
              {/* Monday */}
              <div className="absolute -top-80 -left-5 min-h-screen w-[2px] bg-gray-300" />
              <span
                className={classnames(
                  select === 8 ? "text-white" : "text-gray-400"
                )}
              >
                24
              </span>
            </div>
          </Date>
          <Date>
            <div className="relative">
              <h2 className="absolute -top-6 text-xs text-gray-500">tue</h2>
              <span
                className={classnames(
                  select === 9 ? "text-white" : "text-gray-900"
                )}
              >
                25
              </span>
            </div>
          </Date>
          <Date>
            <span
              className={classnames(
                select === 10 ? "text-white" : "text-gray-400"
              )}
            >
              26
            </span>
          </Date>
          <Date>
            <div className="relative">
              <h2 className="absolute -top-6 text-xs text-gray-500">thu</h2>
              <span
                className={classnames(
                  select === 11 ? "text-white" : "text-gray-900"
                )}
              >
                27
              </span>
            </div>
          </Date>
          <Date>
            <span
              className={classnames(
                select === 12 ? "text-white" : "text-gray-400"
              )}
            >
              28
            </span>
          </Date>
          <Date>
            <span
              className={classnames(
                select === 13 ? "text-white" : "text-gray-400"
              )}
            >
              29
            </span>
          </Date>
          <Date>
            <span
              className={classnames(
                select === 14 ? "text-white" : "text-gray-400"
              )}
            >
              30
            </span>
          </Date>
          <Date>
            <div className="relative">
              {/* Monday */}
              <div className="absolute -top-80 -left-5 min-h-screen w-[2px] bg-gray-300" />
              <h2 className="absolute -top-16 text-2xl text-gray-400">may</h2>
              <span
                className={classnames(
                  select === 15 ? "text-white" : "text-gray-400"
                )}
              >
                01
              </span>
            </div>
          </Date>
          <Date>
            <div className="relative">
              <h2 className="absolute -top-6 text-xs text-gray-500">tue</h2>
              <span
                className={classnames(
                  select === 16 ? "text-white" : "text-gray-900"
                )}
              >
                02
              </span>
            </div>
          </Date>
          <Date>
            <span
              className={classnames(
                select === 17 ? "text-white" : "text-gray-400"
              )}
            >
              03
            </span>
          </Date>
          <Date>
            <div className="relative">
              <h2 className="absolute -top-6 text-xs text-gray-500">thu</h2>
              <span
                className={classnames(
                  select === 18 ? "text-white" : "text-gray-900"
                )}
              >
                04
              </span>
            </div>
          </Date>
          <Date>
            <span
              className={classnames(
                select === 19 ? "text-white" : "text-gray-400"
              )}
            >
              05
            </span>
          </Date>
          <Date>
            <span
              className={classnames(
                select === 20 ? "text-white" : "text-gray-400"
              )}
            >
              06
            </span>
          </Date>
          <Date>
            <span
              className={classnames(
                select === 21 ? "text-white" : "text-gray-400"
              )}
            >
              07
            </span>
          </Date>
          <Date>
            <div className="relative">
              {/* Monday */}
              <div className="absolute -top-80 -left-5 min-h-screen w-[2px] bg-gray-300" />
              <span
                className={classnames(
                  select === 22 ? "text-white" : "text-gray-400"
                )}
              >
                08
              </span>
            </div>
          </Date>
          <Date>
            <div className="relative">
              <h2 className="absolute -top-6 text-xs text-gray-500">tue</h2>
              <span
                className={classnames(
                  select === 23 ? "text-white" : "text-gray-900"
                )}
              >
                09
              </span>
            </div>
          </Date>
          <Date>
            <span
              className={classnames(
                select === 24 ? "text-white" : "text-gray-400"
              )}
            >
              10
            </span>
          </Date>
          <Date>
            <div className="relative">
              <h2 className="absolute -top-6 text-xs text-gray-500">thu</h2>
              <span
                className={classnames(
                  select === 25 ? "text-white" : "text-gray-900"
                )}
              >
                11
              </span>
            </div>
          </Date>
          <Date>
            <span
              className={classnames(
                select === 26 ? "text-white" : "text-gray-400"
              )}
            >
              12
            </span>
          </Date>
          <Date>
            <span
              className={classnames(
                select === 27 ? "text-white" : "text-gray-400"
              )}
            >
              13
            </span>
          </Date>
          <Date>
            <span
              className={classnames(
                select === 28 ? "text-white" : "text-gray-400"
              )}
            >
              14
            </span>
          </Date>
          <Date>
            <div className="relative">
              {/* Monday */}
              <div className="absolute -top-80 -left-5 min-h-screen w-[2px] bg-gray-300" />
              <span
                className={classnames(
                  select === 29 ? "text-white" : "text-gray-400"
                )}
              >
                15
              </span>
            </div>
          </Date>
          <Date>
            <div className="relative">
              <h2 className="absolute -top-6 text-xs text-gray-500">tue</h2>
              <span
                className={classnames(
                  select === 30 ? "text-white" : "text-gray-900"
                )}
              >
                16
              </span>
            </div>
          </Date>
          <Date>
            <span
              className={classnames(
                select === 31 ? "text-white" : "text-gray-400"
              )}
            >
              17
            </span>
          </Date>
          <Date>
            <div className="relative">
              <h2 className="absolute -top-6 text-xs text-gray-500">thu</h2>
              <span
                className={classnames(
                  select === 32 ? "text-white" : "text-gray-900"
                )}
              >
                18
              </span>
            </div>
          </Date>
          <Date>
            <span
              className={classnames(
                select === 33 ? "text-white" : "text-gray-400"
              )}
            >
              19
            </span>
          </Date>
          <Date>
            <span
              className={classnames(
                select === 34 ? "text-white" : "text-gray-400"
              )}
            >
              20
            </span>
          </Date>
          <Date>
            <span
              className={classnames(
                select === 35 ? "text-white" : "text-gray-400"
              )}
            >
              21
            </span>
          </Date>
        </Splide>
      </div>
    </div>
  )
}

export default Index
