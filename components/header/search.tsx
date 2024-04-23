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

// <div
// className="border rounded-lg border-slate-300 text-slate-500 bg-slate-100 text-xs p-2 flex gap-4 items-center
// hover:cursor-pointer hover:bg-slate-200/50 group hover:text-slate-700"
// >
// search documentation

export function Search() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="border rounded-lg border-slate-300 text-slate-500 bg-slate-100 text-xs p-2 flex gap-4 items-center 
hover:cursor-pointer hover:bg-slate-200/50 group hover:text-slate-700 dark:bg-slate-900 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-slate-200"
        >
          search documentation
          <div
            className="flex justify-center items-center bg-slate-200 text-slate-500 text-xs p-1 gap-2 group-hover:bg-slate-300/50
          dark:group-hover:bg-slate-700
          dark:bg-slate-800 dark:text-slate-300"
          >
            <MdKeyboardCommandKey />
            <span>k</span>
          </div>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>Make changes to your profile here. Click save when you're done.</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input id="name" value="Pedro Duarte" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Username
            </Label>
            <Input id="username" value="@peduarte" className="col-span-3" />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
