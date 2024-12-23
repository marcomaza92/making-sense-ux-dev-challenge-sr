export interface SearchProps {
  value?: string;
  onSearchChange: (debouncedSearchTerm: string) => void;
}
