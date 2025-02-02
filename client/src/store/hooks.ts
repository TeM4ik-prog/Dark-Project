import { useSelector } from 'react-redux';
import { RootState } from './store';
import { UserState } from '@/types/states';
import { Category } from '@/types';


export const useAuth = () => {
    const isAuth = useSelector((state: RootState) => state.user.isAuth)
    return isAuth
}

export const useUserData = (): UserState => {
    const user = useSelector((state: RootState) => state.user)
    return user
}

export const useUserLoading = () => {
    const isLoading = useSelector((state: RootState) => state.user.isLoading)
    return isLoading
}

export const useUpdateUserTrigger = () => {
    const userTrigger = useSelector((state: RootState) => state.user.updateTrigger)
    return userTrigger
}

export const useGetUserRole = () => {
    const role = useSelector((state: RootState) => state.user.user?.role)
    return role
};

// __________


export const useCategories = (): { categories: Category[], categoriesNames: string[], categoriesIds: string[] } => {
    try {
        const categories = useSelector((state: RootState) => state.categoriesSlice.categories)


        if (!categories.length) return { categories: [], categoriesNames: [], categoriesIds: [] }

        const categoriesNames = categories.map((category) => category.name) || []
        const categoriesIds = categories.map((category) => category.id) || []
        return { categories, categoriesNames, categoriesIds }
    } catch (error) {
        return { categories: [], categoriesNames: [], categoriesIds: [] }

    }


}




