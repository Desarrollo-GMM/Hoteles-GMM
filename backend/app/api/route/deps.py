import httpx
from app.core.config import settings
from app.db.session import SessionLocal, async_session
from fastapi import Depends, HTTPException
from typing import Generator, AsyncGenerator
from fastapi.security import OAuth2PasswordBearer
from app.enum.EnumProfile import EnumProfileSSO

#* SSO IP
reusable_oauth2 = OAuth2PasswordBearer(
    tokenUrl=f"{settings.API_DOMAIN_SSO}{settings.API_V1_STR}/login/access-token/{settings.CODE_SYSTEM}"
)

def get_db() -> Generator:
    try:
        db = SessionLocal()
        yield db
    finally:
        db.close()


async def async_get_db() -> AsyncGenerator:
    async with async_session() as session:
        yield session

async def get_current_user(token: str = Depends(reusable_oauth2)):
    async with httpx.AsyncClient() as client:
        sso_response = await client.get(
            f"{settings.API_DOMAIN_SSO}{settings.API_V1_STR}/access_system/getCurrentUserSSO/{settings.CODE_SYSTEM}",
            headers={"Authorization": f"Bearer {token}"}
        )
        sso_data = sso_response.json()
    if sso_response.status_code != 200:
        raise HTTPException(status_code=sso_response.status_code,
                            detail="Fallo de obtener el usuario desde el SSO.")
    if sso_response.status_code == 200:
        return sso_data


#!<<<<<<<<<<<<<<<<<<<<<<<<<<<< DEPENDS TO SPECIFIC PROFILE
async def need_admin(token: str = Depends(reusable_oauth2)):
    async with httpx.AsyncClient() as client:
        sso_response = await client.get(
            f"{settings.API_DOMAIN_SSO}{settings.API_V1_STR}/profile_user/ssi/check_profile/",
            headers={"Authorization": f"Bearer {token}"}
        )
        sso_data = sso_response.json()
    if sso_response.status_code != 200:
        raise HTTPException(status_code=sso_response.status_code,
                            detail="Fallo de obtener el usuario desde el SSO.")
    if sso_response.status_code == 200:
        if sso_data["name"] == str(EnumProfileSSO.ADMIN_UT.value):
            return sso_data
        else:
            raise HTTPException(status_code=403, detail="Se requieren permisos de administrador.")


async def need_enlace(token: str = Depends(reusable_oauth2)):
    async with httpx.AsyncClient() as client:
        sso_response = await client.get(
            f"{settings.API_DOMAIN_SSO}{settings.API_V1_STR}/profile_user/ssi/check_profile/",
            headers={"Authorization": f"Bearer {token}"}
        )
        sso_data = sso_response.json()
    if sso_response.status_code != 200:
        raise HTTPException(status_code=sso_response.status_code,
                            detail="Fallo de obtener el usuario desde el SSO.")
    if sso_response.status_code == 200:
        if sso_data["name"] == str(EnumProfileSSO.ENLACE_UA.value):
            return sso_data
        else:
            raise HTTPException(status_code=403, detail="Se requieren permisos de enlace.")
        
#! >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>< END DEPENDS NEED PROFILE

async def get_token_user(token: str = Depends(reusable_oauth2)):
    async with httpx.AsyncClient() as client:
        sso_response = await client.get(
            f"{settings.API_DOMAIN_SSO}{settings.API_V1_STR}/access_system/getCurrentUserSSO/{settings.CODE_SYSTEM}",
            headers={"Authorization": f"Bearer {token}"}
        )
    if sso_response.status_code != 200:
        raise HTTPException(status_code=sso_response.status_code,
                            detail="Fallo de obtener el usuario desde el SSO.")
    if sso_response.status_code == 200:
        return token
    
    
#* New endpoint for check if is admin of ssi
async def validate_admin(token: str = Depends(reusable_oauth2)):
    async with httpx.AsyncClient() as client:
        sso_response = await client.get(
            f"{settings.API_DOMAIN_SSO}{settings.API_V1_STR}/admsys/ssi/validate-admin/",
            headers={"Authorization": f"Bearer {token}"}
        )
        sso_data = sso_response.json()
    if sso_response.status_code != 200:
        raise HTTPException(status_code=sso_response.status_code,
                            detail="Fallo de verificar si es administrador desde el SSO.")
    if sso_response.status_code == 200:
        return sso_data


async def get_immediate_bosses(token: str = Depends(reusable_oauth2),fk_self_hierarchy_id:int = Depends(reusable_oauth2)):
    async with httpx.AsyncClient() as client:
        sso_response = await client.get(
        f"{settings.API_DOMAIN_SSO}{settings.API_V1_STR}/selfHierarchy/hierarchy_immediate_boss/{fk_self_hierarchy_id}",
         headers={"Authorization": f"Bearer {token}"}
         )
        sso_data = sso_response.json()
        
        
    if sso_response.status_code != 200:
        raise HTTPException(status_code=sso_response.status_code,
                            detail="Fallo de obtener el usuario desde el SSO.")
    if sso_response.status_code == 200:
        return sso_data
    
async def get_own_hierarchy(token: str = Depends(reusable_oauth2)):
    async with httpx.AsyncClient() as client:
        sso_response = await client.get(
        f"{settings.API_DOMAIN_SSO}{settings.API_V1_STR}/selfHierarchy/",
         headers={"Authorization": f"Bearer {token}"}
         )
        sso_data = sso_response.json()
        
        
    if sso_response.status_code != 200:
        raise HTTPException(status_code=sso_response.status_code,
                            detail="Fallo de obtener el usuario desde el SSO.")
    if sso_response.status_code == 200:
        return sso_data

async def get_own_hierarchy_or_user(token: str = Depends(reusable_oauth2)):
    async with httpx.AsyncClient() as client:
        sso_response = await client.get(
        f"{settings.API_DOMAIN_SSO}{settings.API_V1_STR}/enlace/sgd/selfhierarchy/",
         headers={"Authorization": f"Bearer {token}"}
         )
        sso_data = sso_response.json()
        
        
    if sso_response.status_code != 200:
        raise HTTPException(status_code=sso_response.status_code,
                            detail="Fallo de obtener el usuario desde el SSO.")
    if sso_response.status_code == 200:
        return sso_data
    
async def get_hierarchy_by_id(id: int, token: str = Depends(reusable_oauth2)):
    async with httpx.AsyncClient() as client:
        sso_response = await client.get(
        f"{settings.API_DOMAIN_SSO}{settings.API_V1_STR}/selfHierarchy/{id}",
         headers={"Authorization": f"Bearer {token}"}
         )
        sso_data = sso_response.json()
        
        
    if sso_response.status_code != 200:
        raise HTTPException(status_code=sso_response.status_code,
                            detail="Fallo de obtener el usuario desde el SSO.")
    if sso_response.status_code == 200:
        return sso_data
