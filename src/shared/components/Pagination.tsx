
interface PokemonPaginationProps {
  currentPage: number;
  onPageChange: (value: number) => void;
  totalPage: number
}

const Pagination = ({ currentPage, onPageChange, totalPage }: PokemonPaginationProps) => {
  return (
    <div className="contenedor_pagination w-full flex justify-center items-center gap-4">
      <button
        className="button_pagination"
        disabled={currentPage === 0}
        onClick={() => onPageChange(currentPage - 1)}
      >
        Anterior
      </button>
      <button
        className="button_pagination"
        disabled={currentPage === totalPage}
        onClick={() => onPageChange(currentPage + 1)}
      >
        Siguiente
      </button>
    </div>
  );
};

export default Pagination;