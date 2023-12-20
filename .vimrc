" vim-plug configuration
call plug#begin('~/.vim/plugged')  " Use the appropriate directory for Neovim (~/.vim/plugged)
" Add your plugins here
call plug#end()

set scrolloff=8
set number
set relativenumber

set tabstop=4 softtabstop=4
set shiftwidth=4
set expandtab
set smartindent

call plug#begin('~/.vim/plugged')

Plug 'junegunn/fzf', { 'do': { -> fzf#install() } }
Plug 'junegunn/fzf.vim'
Plug 'prettier/vim-prettier', {
  \ 'do': 'yarn install --frozen-lockfile --production',
  \ 'branch': 'release/0.x'
  \ }


call plug#end()

colorscheme desert 

let mapleader=" "
nnoremap <leader>pv :Vex<CR>
nnoremap <leader><CR> :so ~/.vimrc<CR>
inoremap jk <esc>
nnoremap<C-p> :GFiles<CR>
nnoremap <leader>pf :Files<CR>
