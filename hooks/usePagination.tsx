import { useState } from 'react';

export const usePagination = (defaultPage: number = 1) => {
  const [page, setPage] = useState(defaultPage);

  const next = () => {
    setPage(page + 1);
  };

  const prev = () => {
    if (page > 1) {
      setPage(page - 1);
    } else {
      setPage(defaultPage);
    }
  };

  return {
    goTo: {
      next,
      prev,
    },
    page,
  };
};
