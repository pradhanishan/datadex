import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { MdKeyboardCommandKey } from 'react-icons/md';

export function SearchBar() {
  return (
    <Button
      className="bg-slate-200  text-nowrap hover:bg-slate-300 group border border-slate-300
    dark:bg-slate-900 dark:border-slate-700 dark:hover:bg-slate-800  transition-all duration-300
    "
    >
      <div className="flex  gap-6 justify-center items-center">
        <span className="text-slate-600 text-md md:text-sm transition-all duration-300 dark:text-slate-400">
          search document
        </span>
        <div
          className="flex flex-row justify-center items-center gap-1 bg-slate-300 p-1 
        rounded-md group-hover:bg-slate-400  transition-all duration-300 dark:bg-slate-800 
        dark:group-hover:bg-slate-700"
        >
          <MdKeyboardCommandKey className="text-slate-600 dark:text-slate-400" />{' '}
          <span className="text-slate-600 dark:text-slate-400">k</span>
        </div>
      </div>
    </Button>
  );
}

export function Search() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <SearchBar />
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>Make changes to your profile here. Click save when you're done.</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">{/* TODO : Search content */}</div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
