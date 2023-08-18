import { useState } from 'react';
import Pagination from 'react-js-pagination';
import PrevIcon from '@/img/arrow-right-circle-30.svg';
import NextIcon from '@/img/arrow-left-circle-30.svg';
import { Meta } from '@/apis/Questions/fetchQuestion';
import Link from 'next/link';
import ButtonS from '../Buttons/button-s';
import { useRecoilState } from 'recoil';
import { PageState } from '@/status/MainStatus';

const Paging = ({ totalCount, totalPage }: Meta) => {
  const [page, setPage] = useRecoilState(PageState);

  const handlePageChange = (page: number) => {
    setPage(page);
  };
  return (
    <>
      {totalCount ? (
        <div className="flex justify-center mt-[40px]">
          <Pagination
            activePage={page}
            itemsCountPerPage={6}
            totalItemsCount={totalCount} //총 아이템 개수
            pageRangeDisplayed={5}
            firstPageText={''}
            lastPageText={''}
            prevPageText={<PrevIcon />}
            nextPageText={<NextIcon />}
            onChange={handlePageChange}
            innerClass="flex justify-center items-center gap-[8px]"
            itemClass="flex justify-center items-center text-body2 text-gray-500 w-[30px] h-[30px] text-center cursor-pointer"
            activeClass="text-main-300 border border-main-300 rounded-[8px]"
          />
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center h-[227px] border-[0.7px] border-gray_line rounded-2xl">
          <div className="flex flex-col mb-8 items-center">
            <p className="text-heading1 text-gray-700">
              해당 카테고리에 등록한 질문-답변이 없어요
            </p>
            <p className="text-body7 text-gray-600 mt-[6px]">
              예상 질문을 만들고 답하러 가볼까요?
            </p>
          </div>
          <Link href={'/post'}>
            <ButtonS>질문-답변 만들기</ButtonS>
          </Link>
        </div>
      )}
    </>
  );
};

export default Paging;
